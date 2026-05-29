export type Plant = {
  id: number;
  name: string;
  type: string;
  watering: string;
  sunlight: string;
};

export const mockPlants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    type: 'Indoor plant',
    watering: 'Once a week',
    sunlight: 'Bright indirect light',
  },
  {
    id: 2,
    name: 'Snake Plant',
    type: 'Indoor plant',
    watering: 'Every 2 weeks',
    sunlight: 'Low to bright light',
  },
  {
    id: 3,
    name: 'Peace Lily',
    type: 'Flowering plant',
    watering: 'Twice a week',
    sunlight: 'Medium indirect light',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    type: 'Succulent',
    watering: 'Every 2-3 weeks',
    sunlight: 'Bright direct light',
  },
];
