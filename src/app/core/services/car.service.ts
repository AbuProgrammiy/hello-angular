import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car.model';
import { CarRequest } from '../request/car.request';
import { buildHttpParams } from '../../shared/utils/build-http-params';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CarService extends ApiService {
  private readonly baseUrl = 'https://697ef5a0d1548030ab64d11f.mockapi.io/hello-car/luxry-cars';

  public get(id: string): Observable<CarModel> {
    return this.httpClient.get<CarModel>(`${this.baseUrl}/${id}`);
  }

  public getAll(request?: CarRequest): Observable<CarModel[]> {
    const params = buildHttpParams(request);
    return this.httpClient.get<CarModel[]>(`${this.baseUrl}`, { params });
  }

  public update(id: string, payload: CarRequest): Observable<CarModel[]> {
    return this.httpClient.put<CarModel[]>(`${this.baseUrl}/${id}`, payload);
  }

  public delete(id: string): Observable<CarModel[]> {
    return this.httpClient.delete<CarModel[]>(`${this.baseUrl}/${id}`);
  }
}
