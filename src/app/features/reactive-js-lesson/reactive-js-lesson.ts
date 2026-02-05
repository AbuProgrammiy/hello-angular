import { Component } from '@angular/core';
import { NumberFactory } from "./components/number-factory/number-factory";
import { SmartSearch } from "./components/smart-search/smart-search";

@Component({
  selector: 'app-reactive-js-lesson',
  imports: [SmartSearch, NumberFactory],
  templateUrl: './reactive-js-lesson.html',
  styleUrl: './reactive-js-lesson.scss',
})
export class ReactiveJsLesson {

}
