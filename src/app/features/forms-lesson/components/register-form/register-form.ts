import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Button } from "primeng/button";
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-register-form',
  imports: [
    FormsModule,
    InputText,
    ReactiveFormsModule,
    Button
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  private readonly fb = inject(FormBuilder);

  protected readonly registerForm = this.fb.group({
    firstName: this.fb.control<string | null>(null, [Validators.required, Validators.min(3)]),
    lastName: this.fb.control<string | null>(null, [Validators.required, Validators.min(3)]),
    email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
    password: this.fb.control<string | null>(null, [Validators.required]),
    confirmPassword: this.fb.control<string | null>(null, [Validators.required]),
  });
}
