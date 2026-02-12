import { Routes } from '@angular/router';
import { FormsLesson } from './features/forms-lesson/forms-lesson';
import { HttpLesson } from './features/http-lesson/http-lesson';
import { ReactiveJsLesson } from './features/reactive-js-lesson/reactive-js-lesson';
import { ShowRoom } from './features/show-room/show-room';
import { SignalLesson } from './features/signal-lesson/signal-lesson';
import { LessonLayout } from './layout/lesson-layout/lesson-layout';
import { ProductDetail } from './shared/components/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lesson/signal-lesson',
    pathMatch: 'full',

  },
  {
    path: 'lesson',
    component: LessonLayout,
    children: [
      {
        path: 'show-room',
        component: ShowRoom
      },
      {
        path: 'product-detail/:id',
        component: ProductDetail
      },
      {
        path: 'reactive-js',
        component: ReactiveJsLesson
      },
      {
        path: 'signal-lesson',
        component: SignalLesson
      },
      {
        path: 'forms-validation',
        component: FormsLesson
      },
      {
        path: 'http-lesson',
        component: HttpLesson
      }
    ]
  }
];
