import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from '../models/car.model';
import { CarRequest } from '../request/car.request';
import { buildHttpParams } from '../../shared/utils/build-http-params';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) { }

  public getAllCards(request?: CarRequest): Observable<CardModel[]> {
    const params = buildHttpParams(request);
    return this.httpClient.get<CardModel[]>('https://697ef5a0d1548030ab64d11f.mockapi.io/hello-car/luxry-cars', { params });
  }
}
