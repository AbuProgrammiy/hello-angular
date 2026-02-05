import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Color } from '../../services/color';

@Component({
  selector: 'app-manager',
  imports: [],
  templateUrl: './manager.html',
  styleUrl: './manager.scss',
})
export class Manager implements OnInit {
  private readonly colorService = inject(Color);
  private readonly destroyRef = inject(DestroyRef);
  protected selectedColor = signal<string | null>(null);
  protected themeCollection = signal<string[]>([
    '#ECECEC',
    '#84934A',
    '#656D3F',
    '#492828'
  ]);

  ngOnInit() {
    this.colorService.selectedColor$
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(color => {
        this.selectedColor.set(color);
      });
  }

  protected changeColor(color: string) {
    this.colorService.changeColor(color);
  }
}
