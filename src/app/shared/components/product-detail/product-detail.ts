import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CarService } from '../../../core/services/car.service';
import { ProgressSpinner } from "primeng/progressspinner";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Button } from "primeng/button";

@Component({
  selector: 'app-product-detail',
  imports: [
    ReactiveFormsModule,
    ProgressSpinner,
    InputTextModule,
    TextareaModule,
    Button,
    RouterLink
],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly carService = inject(CarService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected isLoading = signal<boolean>(false);
  protected isUpdating = signal<boolean>(false);
  protected isDeleting = signal<boolean>(false);

  protected editForm = this.fb.group({
    id: this.fb.control<string | null>(null),
    brand: this.fb.control<string | null>(null),
    model: this.fb.control<string | null>(null),
    description: this.fb.control<string | null>(null),
    price: this.fb.control<string | null>(null),
    imageUrl: this.fb.control<string | null>(null),
  });

  ngOnInit() {
    const carId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loadData(carId);
  }

  private loadData(carId: string) {
    this.isLoading.set(true);

    this.carService.get(carId)
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

  protected update() {
    this.isUpdating.set(true);
    const payload = this.editForm.getRawValue();
    if (!payload) return;
    this.carService.update(payload.id ?? '', payload)
      .pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.carService.showUpdateSuccess();
          this.isUpdating.set(false);
        },
        error: () => {
          this.carService.showUpdateError();
          this.isUpdating.set(false);
        }
      });
  }

  protected delete() {
    this.isDeleting.set(true);
    const carId = this.editForm.controls.id.value;
    if (!carId) return;

    this.carService.delete(carId)
      .pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.carService.showDeleteSuccess();
          this.isDeleting.set(false);
          this.router.navigate(['lesson', 'show-room']);
        },
        error: () => {
          this.carService.showDeleteError();
          this.isDeleting.set(false);

        }
      });
  }
}
