import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Custom validator function
export function gmailValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const email = control.value as string;

  if (!email.toLowerCase().endsWith('@gmail.com')) {
    return { 'invalidGmail': true };
  }

  return null;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
    });
  }

  login() {
    // Handle login logic
    this.router.navigate(['/main-page']);
  }
}

