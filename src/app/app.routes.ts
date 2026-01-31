import { Routes } from '@angular/router';
import { ShowRoom } from './features/show-room/show-room';
import { LessonLayout } from './layout/lesson-layout/lesson-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lesson',
    pathMatch:'full',

  },
  {
    path: 'lesson',
    component: LessonLayout,
    children:[
      {
        path:'',
        redirectTo:'show-room',
        pathMatch:'full'
      },
      {
        path:'show-room',
        component:ShowRoom
      }
    ]
  }
];
