import { NgClass } from '@angular/common';
import { Component, effect, inject, model, Renderer2, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from "primeng/selectbutton";
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-theme-switcher',
  imports: [Tooltip, SelectButtonModule, FormsModule, NgClass],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  private readonly renderer = inject(Renderer2);
  protected themes = signal<Theme[]>([
    {
      label: "Light",
      value: 'light'
    },
    {
      label: "Dark",
      value: 'dark'
    },
  ]);

  protected selectedTheme = model<string>('light');


  constructor() {
    effect(() => {
      const theme = this.selectedTheme();
      const element = document.querySelector('.main');
      this.renderer.setStyle(element, 'background-color', theme);
    });
  }
}

export interface Theme {
  label: string,
  value: string;
}