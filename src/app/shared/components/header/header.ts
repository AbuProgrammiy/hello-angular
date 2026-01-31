import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    RouterLink,
    SelectModule
],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
