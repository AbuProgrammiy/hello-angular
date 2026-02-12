import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostModel } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private readonly httpClient = inject(HttpClient);

  public getPosts(): Observable<BlogPostModel[]> {
    return this.httpClient.get<BlogPostModel[]>('https://gomezmig03.github.io/MotivationalAPI/en.json');
  }
}
