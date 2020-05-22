import { UnitSystem } from './../../enums/unit-system.enum';
import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { TrafficModel } from '../../enums/traffic-model.enum';
import { TravelMode } from '../../enums/travel-mode.enum';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {

  constructor(public settingsService: SettingsService) { }

}
