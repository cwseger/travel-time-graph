import { TrafficModel } from "../enums/traffic-model.enum";
import { TravelMode } from "../enums/travel-mode.enum";
import { UnitSystem } from "../enums/unit-system.enum";

export interface Options {
    timeIncrementOptions: TimeIncrementOption[];
    timeRangeOptions: TimeRangeOption[];
    trafficModelOptions: TrafficModelOption[];
    travelModeOptions: TravelModeOption[];
    unitSystemOptions: UnitSystemOption[]
}

export interface TimeIncrementOption {
    name: string;
    timeInSeconds: number;
}

export interface TimeRangeOption {
    name: string;
    rangeInSeconds: number;
}

export interface TrafficModelOption {
    name: string;
    trafficModel: TrafficModel;
}

export interface TravelModeOption {
    name: string;
    travelMode: TravelMode;
}

export interface UnitSystemOption {
    name: string;
    unitSystem: UnitSystem;
}
