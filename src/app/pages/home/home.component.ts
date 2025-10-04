import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from '../../services/dogs.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private dogsService = inject(DogsService);
  private session = inject(SessionService);
  private router = inject(Router);

  dogs = this.dogsService.getDogs();
  selectedDog: any = null;

  username() {
    return this.session.getUser();
  }

  onPick(dog: any) {
    this.selectedDog = dog;
  }

  selected() {
    return this.selectedDog;
  }

  logout() {
    this.session.clear();
    this.router.navigateByUrl('/login');
  }
}
