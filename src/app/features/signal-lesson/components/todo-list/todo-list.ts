import { DatePipe } from '@angular/common';
import { Component, computed, effect, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { Tooltip } from 'primeng/tooltip';
import { StatePipe } from "./pipes/state-pipe";

@Component({
  selector: 'app-todo-list',
  imports: [Tooltip, SelectButton, FormsModule, DatePipe, StatePipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  private toDoList = signal<ToDoModel[]>([
    {
      name: "Yugurish",
      description: "Ertalabdan",
      date: new Date(2026, 2, 3, 5, 50),
      state: State.Completed
    },
    {
      name: "Coffe ichish",
      description: "Energiya uchun",
      date: new Date(2026, 2, 3, 7, 10),
      state: State.InProgress
    },
    {
      name: "Code yozish",
      description: "Pul topish uchun)",
      date: new Date(2026, 2, 3, 9, 50),
      state: State.InProgress
    },
    {
      name: "Dam olish",
      description: "Yashash uchun",
      date: new Date(2026, 2, 3, 12, 40),
      state: State.Waiting
    },
    {
      name: "Tushlik qilish",
      description: "Tirik qolish uchun",
      date: new Date(2026, 2, 3, 14, 30),
      state: State.Waiting
    },
    {
      name: "Uxlash",
      description: "z z z...",
      date: new Date(2026, 2, 3, 16, 0),
      state: State.Waiting
    },
  ]);

  protected selectedState = model<State | null>();

  protected filteredToDo = computed(() => {
    const state = this.selectedState();
    if (!state) return this.toDoList();

    return this.toDoList().filter(x => x.state == state);
  });

  protected stateOptions = [
    {
      label: 'Waiting',
      value: State.Waiting
    },
    {
      label: 'InProgress',
      value: State.InProgress
    },
    {
      label: 'Completed',
      value: State.Completed
    },
  ];

  constructor() {
    effect(() => {
      const state = this.selectedState();
      if (state) {
        localStorage.setItem('selected-state', state.toString());
      }
      else {
        localStorage.setItem('selected-state', 'not selected');
      }
    });
  }
}

export interface ToDoModel {
  name: string,
  description: string,
  date: Date;
  state: State;
}

export enum State {
  Waiting = 1,
  InProgress = 2,
  Completed = 3
}
