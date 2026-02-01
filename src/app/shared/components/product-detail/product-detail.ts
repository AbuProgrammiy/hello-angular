import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../core/services/car.service';
import { ProgressSpinner } from "primeng/progressspinner";
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-product-detail',
  imports: [
    ReactiveFormsModule,
    ProgressSpinner,
    InputTextModule
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private readonly fb = inject(FormBuilder);
  private readonly carService = inject(CarService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly activatedRoute = inject(ActivatedRoute);

  protected isLoading = signal<boolean>(true);

  protected editForm = this.fb.group({
    id: this.fb.control<string | null>(null),
    name: this.fb.control<string | null>(null),
    model: this.fb.control<string | null>(null),
    description: this.fb.control<string | null>(null),
    pictureUrl: this.fb.control<string | null>(null),
  });

  ngOnInit() {
    const carId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loadData(carId);
  }

  private loadData(carId: string) {
    this.isLoading.set(true);

    this.carService.getById(carId)
      .pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      )
      .subscribe({
        next: (data) => {
          this.editForm.patchValue(data);
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        }
      });
  }
}
