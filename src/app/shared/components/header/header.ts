import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    RouterLink,
    SelectModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected lessons = signal<LessonItem[]>([
    {
      name: "Signal",
      path: '/lesson/signal-lesson'
    },
    {
      name: "RxJS",
      path: '/lesson/reactive-js'
    },
    {
      name: "Words",
      path: '/lesson/show-room'
    },
  ]);


}

export interface LessonItem {
  name: string,
  path: string;
}
