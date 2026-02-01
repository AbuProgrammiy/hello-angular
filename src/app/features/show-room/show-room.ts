import { Component, DestroyRef, inject, model, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CarModel } from '../../core/models/car.model';
import { CarService } from '../../core/services/car.service';
import { CarCard } from "../../shared/components/car-card/car-card";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-room',
  imports: [
    InputTextModule,
    CardModule,
    Button,
    CarCard,
    ProgressSpinnerModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './show-room.html',
  styleUrl: './show-room.scss',
})
export class ShowRoom implements OnInit {
  private readonly carService = inject(CarService);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly router = inject(Router);

  protected cars = signal<CarModel[]>([]);
  protected isLoading = signal<boolean>(false);
  protected searchWord = model<string>();

  ngOnInit() {
    this.loadData();
  }

  protected loadData(name?: string) {
    this.isLoading.set(true);
    this.carService.getAll({
      model: this.searchWord()
    })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.cars.set(data);
          this.isLoading.set(false);
        },
        error: (_err) => {
          this.cars.set([]);
          this.isLoading.set(false);
        }
      });
  }
}
