import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatImageModel } from '../models/cat-image.model';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private readonly httpClient = inject(HttpClient);

  public getCat(): Observable<CatImageModel> {
    return this.httpClient.get<CatImageModel>('https://cataas.com/cat?json=true');
  }
}
