import { Component } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { DataUtils } from '../app/utils/data.utils';
import { TravelInfo } from '../app/models/travel-info.model';
import { LocationsInfo } from './models/locations-info.model';
import { SettingsService } from './services/settings.service';
import { TravelMode } from './enums/travel-mode.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  travelInfos: TravelInfo[] = [];

  constructor(public dataUtils: DataUtils,
    public settingsService: SettingsService,
    private dataService: DataService) { }

  submit(locations: LocationsInfo) {
    this.loading = true;
    this.travelInfos = [];
    const timeIncrement = this.settingsService.settings.timeIncrement;
    const timeRange = this.settingsService.settings.timeRange;
    const departureTimes = this.dataUtils.createDepartureTimeArray(timeIncrement, timeRange);

    this.dataService.getTravelTimes(locations.origin, locations.destination, departureTimes, this.settingsService.settings)
      .subscribe(responses => {
        responses.forEach(response => {
          if (this.settingsService.settings.travelMode === TravelMode.DRIVING) {
            this.travelInfos.push({
              departureTime: response.departureTime,
              distance: response.body.rows[0].elements[0].distance.value,
              duration: response.body.rows[0].elements[0].duration.value,
              durationInTraffic: response.body.rows[0].elements[0].duration_in_traffic.value
            });
          } else {
            this.travelInfos.push({
              departureTime: response.departureTime,
              distance: response.body.rows[0].elements[0].distance.value,
              duration: response.body.rows[0].elements[0].duration.value,
              durationInTraffic: null
            });
          }
        });
        this.sort();
      });
  }

  private sort() {
    this.travelInfos.sort(function (a, b) {
      return a.departureTime - b.departureTime;
    });
    this.loading = false;
  }

}
