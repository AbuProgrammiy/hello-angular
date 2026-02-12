import { Component, computed, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    RouterLink,
    SelectModule,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);
  protected selectedOption = model<string | null>();
  protected navBarItems = computed(() => {
    return this.lessons().slice(0, 3);
  });
  protected dropDownOptions = computed(() => {
    return this.lessons().slice(3);
  });
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
      name: "Forms and Validation",
      path: '/lesson/forms-validation'
    },
    {
      name: "Http-Lesson",
      path: '/lesson/http-lesson'
    },
    {
      name: "Words",
      path: '/lesson/show-room'
    },
  ]);

  onDropdownChange(path: string) {
    this.router.navigate([path]);
  }

}

export interface LessonItem {
  name: string,
  path: string;
}
