import { Component } from '@angular/core';
import { BlogPosts } from "./components/blog-posts/blog-posts";

@Component({
  selector: 'app-http-lesson',
  imports: [BlogPosts],
  templateUrl: './http-lesson.html',
  styleUrl: './http-lesson.scss',
})
export class HttpLesson {

}
