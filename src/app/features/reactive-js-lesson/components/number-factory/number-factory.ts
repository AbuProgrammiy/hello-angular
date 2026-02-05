import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from "primeng/tooltip";
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-number-factory',
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    TooltipModule
  ],
  templateUrl: './number-factory.html',
  styleUrl: './number-factory.scss',
})
export class NumberFactory {

  private readonly destroyRef = inject(DestroyRef);
  protected numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  protected result = signal<number[] | null>([]);

  ngOnInit() {
    this.numbers$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(x => x % 2 != 0),
        map(x => x * x)
      )
      .subscribe(data => {
        this.result.update(arr => {
          arr?.push(data);
          return arr;
        });
      });
  }
}
