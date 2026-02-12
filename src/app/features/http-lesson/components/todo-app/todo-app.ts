import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { TodoResponseModel } from './models/blog-post.model';
import { TodoService } from './services/blog-post.service';

@Component({
  selector: 'app-todo-app',
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.scss',
})
export class TodoApp implements OnInit {
  private todoService = inject(TodoService);
  private destroyRef = inject(DestroyRef);
  private messageService = inject(MessageService);

  protected todos = signal<TodoResponseModel | null>(null);


  ngOnInit() {
    this.todoService.getTodos()
      .pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      )
      .subscribe({
        next: (data) => {
          this.todos.set(data);
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
