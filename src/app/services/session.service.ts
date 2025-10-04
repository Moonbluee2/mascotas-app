import { Injectable, signal } from '@angular/core';

const KEY = 'app_user_name';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  setUser(name: string) {
    localStorage.setItem('user', name);
  }

  getUser(): string {
    return localStorage.getItem('user') || '';
  }

  clear() {
    localStorage.removeItem('user');
  }
}