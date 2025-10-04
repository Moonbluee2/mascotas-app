import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Dog } from '../../models/dog';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dog-card.component.html'
})
export class DogCardComponent {
  @Input({ required: true }) dog!: Dog;
}
