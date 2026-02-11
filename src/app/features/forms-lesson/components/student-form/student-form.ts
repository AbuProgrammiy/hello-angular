import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Button } from "primeng/button";
import { InputText } from 'primeng/inputtext';
import { MultiSelect } from 'primeng/multiselect';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'app-student-form',
  imports: [Button, ReactiveFormsModule, InputText, Select, MultiSelect, Textarea],
  templateUrl: './student-form.html',
  styleUrl: './student-form.scss',
})
export class StudentForm {
  private readonly fb = inject(FormBuilder);
  private readonly messageService = inject(MessageService);

  protected readonly registerForm = this.fb.group({
    fullName: this.fb.control<string | null>(null, [Validators.required, Validators.minLength(3)]),
    grade: this.fb.control<string | null>(null, [Validators.required]),
    phonenumber: this.fb.control<string | null>(null, [Validators.required, Validators.pattern(/^\+9989/)]),
    subject: this.fb.control<string | null>(null, [Validators.required]),
    comment: this.fb.control<string | null>(null, [Validators.required]),
  });

  protected subjects = ["Math", "Geography", "Biology", "Music", "Geometry"];

  get fullName() {
    return this.registerForm.get('fullName');
  }
  get grade() {
    return this.registerForm.get('grade');
  }
  get phonenumber() {
    return this.registerForm?.get('phonenumber');
  }
  get subject() {
    return this.registerForm.get('subject');
  }
  get comment() {
    return this.registerForm.get('comment');
  }


  protected register() {
    this.messageService.add({
      severity: 'success', summary: 'Success', detail: 'Registered successfully!', life: 3000
    });
  }
}
