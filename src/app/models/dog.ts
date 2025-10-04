export interface Dog {
  id: string;
  name: string;
  image: string;                        // URL imagen
  lifespan: { min: number; max: number };
  description: string;
}
