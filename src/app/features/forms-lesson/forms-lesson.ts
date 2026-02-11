import { Component } from '@angular/core';
import { RegisterForm } from "./components/register-form/register-form";
import { StudentForm } from "./components/student-form/student-form";

@Component({
  selector: 'app-forms-lesson',
  imports: [RegisterForm, StudentForm],
  templateUrl: './forms-lesson.html',
  styleUrl: './forms-lesson.scss',
})
export class FormsLesson {

}
