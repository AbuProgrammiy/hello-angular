import { Component } from '@angular/core';
import { BlogPosts } from "./components/blog-posts/blog-posts";
import { TodoApp } from "./components/todo-app/todo-app";

@Component({
  selector: 'app-http-lesson',
  imports: [BlogPosts, TodoApp],
  templateUrl: './http-lesson.html',
  styleUrl: './http-lesson.scss',
})
export class HttpLesson {

}
