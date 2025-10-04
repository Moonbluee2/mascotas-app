import { Injectable } from '@angular/core';
import { arregloDePerros } from './arregloDePerros';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  getDogs() {
    // Ajustamos a la estructura actual del arreglo
    return arregloDePerros.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      lifespan: p.life, // ya no es p.attributes.life
      image: p.image,
    }));
  }
}
