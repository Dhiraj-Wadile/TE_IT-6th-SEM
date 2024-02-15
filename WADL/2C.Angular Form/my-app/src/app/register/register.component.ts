// register.component.ts
import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private registerService: RegisterService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get fullName() {
    return this.registrationForm.get('fullName');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  register(): void {
    // Validate form data
    if (this.registrationForm.valid && this.password?.value === this.confirmPassword?.value) {
      const userData = this.registrationForm.value;
      this.registerService.register(userData).subscribe((success) => {
        if (success) {
          // Registration successful, navigate or perform other actions
        } else {
          // Handle unsuccessful registration
        }
      });
    } else {
      // Form data is not valid, handle accordingly
    }
  }
}
