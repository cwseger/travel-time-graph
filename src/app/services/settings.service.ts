import { UnitSystem } from './../enums/unit-system.enum';
import { TravelMode } from './../enums/travel-mode.enum';
import { Injectable } from '@angular/core';
import { Settings } from '../models/settings.model';
import { TrafficModel } from '../enums/traffic-model.enum';
import { Options, TimeIncrementOption, TimeRangeOption, TrafficModelOption, TravelModeOption, UnitSystemOption } from '../models/options.model';

@Injectable()
export class SettingsService {

  settings: Settings = {
    timeIncrement: 60 * 60,
    timeRange: 60 * 60 * 5,
    trafficModel: TrafficModel.BEST_GUESS,
    travelMode: TravelMode.DRIVING,
    unitSystem: UnitSystem.IMPERIAL
  };

  options: Options = {
    timeIncrementOptions: [
      { name: '5 Minutes', timeInSeconds: 60 * 5 } as TimeIncrementOption,
      { name: '15 Minutes', timeInSeconds: 60 * 15 } as TimeIncrementOption,
      { name: '30 Minutes', timeInSeconds: 60 * 30 } as TimeIncrementOption,
      { name: '60 Minutes', timeInSeconds: 60 * 60 } as TimeIncrementOption,
    ],

    timeRangeOptions: [
      { name: '1 Hour', rangeInSeconds: 60 * 60 } as TimeRangeOption,
      { name: '5 Hours', rangeInSeconds: 60 * 60 * 5 } as TimeRangeOption,
      { name: '12 Hours', rangeInSeconds: 60 * 60 * 12 } as TimeRangeOption
    ],

    trafficModelOptions: [
      { name: 'Best Guess', trafficModel: TrafficModel.BEST_GUESS } as TrafficModelOption,
      { name: 'Optimistic', trafficModel: TrafficModel.OPTIMISTIC } as TrafficModelOption,
      { name: 'Pessimistic', trafficModel: TrafficModel.PESSIMISTIC } as TrafficModelOption
    ],

    travelModeOptions: [
      { name: 'Driving', travelMode: TravelMode.DRIVING } as TravelModeOption,
      { name: 'Bicycling', travelMode: TravelMode.BICYCLING } as TravelModeOption,
      { name: 'Walking', travelMode: TravelMode.WALKING } as TravelModeOption
    ],

    unitSystemOptions: [
      { name: 'Imperial', unitSystem: UnitSystem.IMPERIAL } as UnitSystemOption,
      { name: 'Metric', unitSystem: UnitSystem.METRIC } as UnitSystemOption
    ]
  };

  constructor() { }

}
