import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoResponseModel } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly httpClient = inject(HttpClient);

  public getTodos(): Observable<TodoResponseModel> {
    return this.httpClient.get<TodoResponseModel>('https://dummyjson.com/todos');
  }
}
