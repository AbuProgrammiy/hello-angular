import { Component } from '@angular/core';
import { ColorManagment } from "./components/color-managment/color-managment";
import { NumberFactory } from "./components/number-factory/number-factory";
import { SmartSearch } from "./components/smart-search/smart-search";

@Component({
  selector: 'app-reactive-js-lesson',
  imports: [SmartSearch, NumberFactory, ColorManagment],
  templateUrl: './reactive-js-lesson.html',
  styleUrl: './reactive-js-lesson.scss',
})
export class ReactiveJsLesson {

}
