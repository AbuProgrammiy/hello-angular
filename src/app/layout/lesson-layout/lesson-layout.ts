import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../shared/components/header/header";

@Component({
  selector: 'app-lesson-layout',
  imports: [
    RouterOutlet,
    Header
],
  templateUrl: './lesson-layout.html',
  styleUrl: './lesson-layout.scss',
})
export class LessonLayout {

}
