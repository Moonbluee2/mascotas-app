import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Dog } from '../../models/dog';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dog-list.component.html'
})
export class DogListComponent {
  @Input({ required: true }) dogs: Dog[] = [];
  @Input() selectedId: string | null = null;

  @Output() pick = new EventEmitter<Dog>();

  select(d: Dog) { this.pick.emit(d); }
}
