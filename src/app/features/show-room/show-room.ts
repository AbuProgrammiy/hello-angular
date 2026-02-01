import { Component, DestroyRef, inject, model, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CardModel } from '../../core/models/car.model';
import { CarService } from '../../core/services/car.service';
import { CarCard } from "../../shared/components/car-card/car-card";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-room',
  imports: [
    InputTextModule,
    CardModule,
    Button,
    CarCard,
    ProgressSpinnerModule,
    FormsModule
  ],
  templateUrl: './show-room.html',
  styleUrl: './show-room.scss',
})
export class ShowRoom implements OnInit {
  private readonly carService = inject(CarService);
  private readonly destroyRef = inject(DestroyRef);

  protected cars = signal<CardModel[]>([]);
  protected isLoading = signal<boolean>(false);
  protected searchWord = model<string>();

  ngOnInit() {
    this.loadData();
  }

  protected loadData(name?: string) {
    this.isLoading.set(true);
    this.carService.getAllCards({
      name: this.searchWord()
    })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.cars.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.log(err);
          this.isLoading.set(false);
        }
      });
  }

  protected search() {

  }
}
