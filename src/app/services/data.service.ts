import { Settings } from './../models/settings.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const getTravelTimesUrl = 'https://us-central1-travel-time-graph.cloudfunctions.net/getTravelTimes';
const getLocationPredictionsUrl = 'https://us-central1-travel-time-graph.cloudfunctions.net/getLocationPredictions';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getTravelTimes(origin: string, destination: string, departureTimes: number[], settings: Settings): Observable<any> {
    const body = this.buildData(origin, destination, departureTimes, settings);
    return this.http.post(getTravelTimesUrl, JSON.stringify(body));
  }

  getLocationPredictions(fragment: string): Observable<any> {
    return this.http.post(getLocationPredictionsUrl, fragment);
  }

  private buildData(origin: string, destination: string, departureTimes: number[], settings: Settings) {
    return {
      origin,
      destination,
      departureTimes,
      settings
    };
  }

}

