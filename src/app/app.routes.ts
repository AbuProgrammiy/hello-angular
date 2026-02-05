import { Routes } from '@angular/router';
import { ReactiveJsLesson } from './features/reactive-js-lesson/reactive-js-lesson';
import { ShowRoom } from './features/show-room/show-room';
import { LessonLayout } from './layout/lesson-layout/lesson-layout';
import { ProductDetail } from './shared/components/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lesson/reactive-js',
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
      }
    ]
  }
];
