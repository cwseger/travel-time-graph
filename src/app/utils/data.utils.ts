import { UnitSystem } from './../enums/unit-system.enum';
import { TrafficModel } from "../enums/traffic-model.enum";
import { TravelMode } from "../enums/travel-mode.enum";

export class DataUtils {
  createDepartureTimeArray(timeIncrement: number, timeRange: number): number[] {
    const departureTimes: number[] = [];

    // Add time of initial request
    departureTimes.push(Math.round(Date.now() / 1000));

    // Add timeIncrement to previous request time
    for (let i = 1; i < (timeRange / timeIncrement); i++) {
      departureTimes.push(departureTimes[i - 1] + timeIncrement);
    }

    return departureTimes;
  }

  formatPlacePredictions(predictions: any) {
    const formattedPredictions: string[] = [];

    predictions.forEach(prediction => {
      formattedPredictions.push(prediction.description);
    });

    return formattedPredictions;
  }

  formatDepartureTime(departureTime: number): string {
    const date = new Date(departureTime * 1000);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      weekday: 'short'
    };
    return date.toLocaleString('en-US', options);
  }

  formatDistance(distance: number): string {
    const factor = 0.000621371192;
    return Math.round(distance * factor) + ' miles';
  }

  formatDurationInTraffic(duration: number): string {
    const hours = Math.floor(duration / 3600);
    duration -= hours * 3600;
    const minutes = Math.floor(duration / 60);
    duration -= minutes * 60;

    let output = '';
    if (hours > 0) {
      output += hours + ' h ';
    }
    if (minutes > 0) {
      output += minutes + ' min';
    }

    return output;
  }

  convertSecondsToMinutes(duration: number) {
    return duration / 60;
  }

  buildTravelTimeDataUrl(
    origin: string,
    destination: string,
    travelMode: TravelMode,
    unitSystem: UnitSystem,
    departureTime: number,
    trafficModel: TrafficModel
  ): string {
    return (
      '&origins=' + origin +
      '&destinations=' + destination +
      '&mode=' + travelMode +
      '&units=' + unitSystem +
      '&departure_time=' + departureTime +
      '&traffic_model=' + trafficModel
    );
  }
}
