import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Button } from "primeng/button";
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-register-form',
  imports: [
    FormsModule,
    InputText,
    ReactiveFormsModule,
    Button,
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  private readonly fb = inject(FormBuilder);

  private passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!(this.password && this.confirmPassword)) return null;

    if (this.password?.value != this.confirmPassword.value) return { passwordMismatch: true };

    return null;
  };
  protected readonly registerForm = this.fb.group({
    firstName: this.fb.control<string | null>(null, [Validators.required, Validators.minLength(3)]),
    lastName: this.fb.control<string | null>(null, [Validators.required, Validators.minLength(3)]),
    email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
    password: this.fb.control<string | null>(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
    confirmPassword: this.fb.control<string | null>(null, [Validators.required]),
  }, { validators: this.passwordMatchValidator });

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm?.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}
