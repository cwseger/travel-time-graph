import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataUtils } from '../../utils/data.utils';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
  styleUrls: ['./locations-form.component.css']
})
export class LocationsFormComponent implements OnInit {

  @Output() submit = new EventEmitter();

  locationsForm: FormGroup;
  origin: FormControl;
  destination: FormControl;

  originPlacePredictions: any;
  destinationPlacePredictions: any;

  constructor(private fb: FormBuilder,
    private dataUtils: DataUtils,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.initializeFormControls();
  }

  submitForm() {
    this.submit.emit({ origin: this.origin.value, destination: this.destination.value });
  }

  locationInput(originOrDestination: string) {
    let fragment: string;
    if (originOrDestination === 'origin') {
      fragment = this.origin.value;
    } else {
      fragment = this.destination.value;
    }

    this.dataService.getLocationPredictions(fragment).subscribe(
      (response) => this.handlePlaceAutocompleteResponse(response, originOrDestination));
  }

  private handlePlaceAutocompleteResponse(response: any, originOrDestination: string) {
    switch (response.status) {
      case 'OK':
        if (originOrDestination === 'origin') {
          this.originPlacePredictions = this.dataUtils.formatPlacePredictions(response.predictions);
        } else {
          this.destinationPlacePredictions = this.dataUtils.formatPlacePredictions(response.predictions);
        }
        break;
      case 'ZERO_RESULTS':
        console.log(response.status);
        break;
      case 'OVER_QUERY_LIMIT':
        console.log(response.status);
        break;
      case 'REQUEST_DENIED':
        console.log(response.status);
        break;
      case 'INVALID_REQUEST':
        console.log(response.status);
        break;
      default:
        break;
    }
  }

  private initializeFormControls() {
    this.origin = new FormControl('', Validators.required);
    this.destination = new FormControl('', Validators.required);

    this.locationsForm = this.fb.group({
      origin: this.origin,
      destination: this.destination
    });
  }

}
