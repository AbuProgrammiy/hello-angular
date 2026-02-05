import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { Manager } from "./components/manager/manager";
import { Presenter } from "./components/presenter/presenter";

@Component({
  selector: 'app-color-managment',
  imports: [
    Tooltip,
    Manager,
    Presenter
  ],
  templateUrl: './color-managment.html',
  styleUrl: './color-managment.scss',
})
export class ColorManagment {

}
