import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { BlogPostModel } from './models/blog-post.model';
import { BlogPostService } from './services/blog-post.service';

@Component({
  selector: 'app-blog-posts',
  imports: [
    AsyncPipe
  ],
  templateUrl: './blog-posts.html',
  styleUrl: './blog-posts.scss',
})
export class BlogPosts {
  private blogPostService = inject(BlogPostService);
  private destroyRef = inject(DestroyRef);
  private messageService = inject(MessageService);

  protected posts = signal<BlogPostModel[]>([]);

  photo = of('https://coffee.alexflipnote.dev/random');

  ngOnInit() {
    this.blogPostService.getPosts()
      .pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      )
      .subscribe({
        next: (data) => {
          this.posts.set(data);
        },
        error: () => {
          this.messageService.add({
            text: "Error in request ",
            severity: 'danger'
          });
        }
      });
  }
}
