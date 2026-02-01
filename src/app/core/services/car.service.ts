import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponse } from '../models/car-response.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) { }

  public getAllCards(): Observable<CarResponse> {
    return this.httpClient.get<CarResponse>('https://car.more-info.uz:400/api/Car/Get');
  }
}
