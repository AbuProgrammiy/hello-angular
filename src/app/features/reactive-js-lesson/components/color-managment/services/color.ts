import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Color {
  private themeColor$ = new BehaviorSubject<string>('#ECECEC');
  public selectedColor$ = this.themeColor$.asObservable();
  public changeColor(color: string) {
    this.themeColor$.next(color);
  }
}
