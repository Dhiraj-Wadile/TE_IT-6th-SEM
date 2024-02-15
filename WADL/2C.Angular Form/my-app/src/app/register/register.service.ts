// register.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  register(userData: any): Observable<boolean> {
    // Simulate registration logic
    // Replace this with your actual registration logic
    console.log('Registration successful:', userData);
    return of(true);
  }
}
