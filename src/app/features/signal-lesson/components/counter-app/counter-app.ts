import { Component, computed, effect, signal } from '@angular/core';
import { Button } from "primeng/button";
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: 'app-counter-app',
  imports: [Tooltip, Button],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.scss',
})
export class CounterApp {
  protected number = signal<number>(0);
  protected doubleResult = computed(() => {
    return this.number() * 2;
  });

  constructor() {
    effect(() => {
      localStorage.setItem('number', this.number().toString());
    });
  }

  protected trippleResult = computed(() => {
    return this.number() * 3;
  });

  protected increment() {
    this.number.update(n => n + 1);
  }

  protected decrement() {
    this.number.update(n => n - 1);
  }
}
