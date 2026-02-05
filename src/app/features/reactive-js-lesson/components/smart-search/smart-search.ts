import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-smart-search',
  imports: [
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './smart-search.html',
  styleUrl: './smart-search.scss',
})
export class SmartSearch implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  protected searchControl = new FormControl<string | null>(null);
  protected writtenText = signal<string | null>(null);

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(600),
        filter(x => (x?.length ?? 0) > 3)
      )
      .subscribe(text => {
        this.writtenText.set(text);
      });
  }
}
