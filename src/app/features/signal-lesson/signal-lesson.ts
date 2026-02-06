import { Component } from '@angular/core';
import { CounterApp } from "./components/counter-app/counter-app";
import { ThemeSwitcher } from "./components/theme-switcher/theme-switcher";
import { TodoList } from "./components/todo-list/todo-list";

@Component({
  selector: 'app-signal-lesson',
  imports: [CounterApp, TodoList, ThemeSwitcher],
  templateUrl: './signal-lesson.html',
  styleUrl: './signal-lesson.scss',
})
export class SignalLesson {

}
