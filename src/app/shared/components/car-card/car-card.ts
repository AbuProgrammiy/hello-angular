import { Component, input } from '@angular/core';
import { CardModel } from '../../../core/models/car.model';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.html',
  styleUrl: './car-card.scss',
})
export class CarCard {
  public item = input<CardModel>();
}
