import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";
import { CarCard } from "../../shared/components/car-card/car-card";

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
export class ShowRoom {

}
