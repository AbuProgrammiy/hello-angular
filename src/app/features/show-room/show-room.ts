import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";
import { CarCard } from "../../shared/components/car-card/car-card";
import { CarService } from '../../core/services/car.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Car } from '../../core/models/car.model';

@Component({
  selector: 'app-show-room',
  imports: [
    InputTextModule,
    CardModule,
    Button,
    CarCard
  ],
  templateUrl: './show-room.html',
  styleUrl: './show-room.scss',
})
export class ShowRoom implements OnInit {
  private readonly carService = inject(CarService);
  private readonly destroyRef = inject(DestroyRef);

  protected cars = signal<Car[]>([]);

  ngOnInit() {
    this.getAllCars();
  }

  protected getAllCars() {
    this.carService.getAllCards()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.cars.set(data.response);
        },
        error: (err) => {
          console.log(err);

        }
      });
  }
}
