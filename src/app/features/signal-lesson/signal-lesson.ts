import { Component } from '@angular/core';
import { CounterApp } from "./components/counter-app/counter-app";

@Component({
  selector: 'app-signal-lesson',
  imports: [CounterApp],
  templateUrl: './signal-lesson.html',
  styleUrl: './signal-lesson.scss',
})
export class SignalLesson {

}
