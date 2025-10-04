import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private router = inject(Router);
  private session = inject(SessionService);

  user = '';
  pass = '';
  submitted = false;

  submit() {
    this.submitted = true;
    if (this.user.trim() && this.pass.trim()) {
        this.session.setUser(this.user.trim());
        this.router.navigateByUrl('/home');
    }
  }
}
