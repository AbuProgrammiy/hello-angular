import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Color } from '../../services/color';

@Component({
  selector: 'app-presenter',
  imports: [],
  templateUrl: './presenter.html',
  styleUrl: './presenter.scss',
})
export class Presenter implements OnInit {
  private readonly colorService = inject(Color);
  private readonly destroyRef = inject(DestroyRef);
  protected selectedColor = signal<string | null>(null);

  ngOnInit(): void {
    this.colorService.selectedColor$
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(color => {
        this.selectedColor.set(color);
      });
  }
}
