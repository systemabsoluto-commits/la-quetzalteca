import { MenuItem, CategoryInfo } from '../types';

export const BUSINESS_INFO = {
  name: "La Quetzalteca",
  address: "1111 N Meridian Ave, Unit C",
  city: "Oklahoma City",
  state: "OK",
  zip: "73107",
  phone: "(405) 555-0123", // Placeholder phone
  hours: {
    weekdays: "7:00 AM - 9:00 PM",
    weekends: "7:00 AM - 10:00 PM"
  },
  social: {
    facebook: "#",
    instagram: "#"
  }
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'tortillas',
    title: 'Tortillería',
    description: 'Tortillas frescas hechas todos los días con la receta tradicional.',
    icon: 'Circle'
  },
  {
    id: 'panaderia',
    title: 'Panadería',
    description: 'Pan dulce y salado horneado diariamente. El sabor de casa.',
    icon: 'Croissant'
  },
  {
    id: 'carniceria',
    title: 'Carnicería',
    description: 'Cortes frescos y marinados listos para tu asado familiar.',
    icon: 'Beef'
  },
  {
    id: 'snacks',
    title: 'Snacks & Antojitos',
    description: 'Refrescantes mangonadas, aguas frescas, fresas con crema y más.',
    icon: 'IceCream'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Tortillas
  {
    id: 't1',
    name: 'Tortillas de Maíz',
    description: 'Paquete de tortillas de maíz calientitas, hechas al instante.',
    imageUrl: '/images/2.png',
    category: 'tortillas'
  },
  {
    id: 't2',
    name: 'Tortillas de Harina',
    description: 'Suaves y perfectas para burritos o quesadillas.',
    imageUrl: '/images/3.png',
    category: 'tortillas'
  },
  // Panaderia
  {
    id: 'p1',
    name: 'Conchas Tradicionales',
    description: 'Esponjosas conchas de vainilla y chocolate.',
    imageUrl: '/images/6.png',
    category: 'panaderia'
  },
  {
    id: 'p2',
    name: 'Pan Francés',
    description: 'Crujiente por fuera, suave por dentro. Ideal para acompañar.',
    imageUrl: '/images/7.png',
    category: 'panaderia'
  },
  {
    id: 'p3',
    name: 'Cuernitos',
    description: 'Pan dulce en forma de cuerno, perfecto con café.',
    imageUrl: '/images/8.png',
    category: 'panaderia'
  },
  // Carniceria
  {
    id: 'c1',
    name: 'Carne Asada Marinada',
    description: 'Nuestra receta secreta, lista para la parrilla.',
    imageUrl: '/images/9.png',
    category: 'carniceria'
  },
  {
    id: 'c2',
    name: 'Pollo Preparado',
    description: 'Pollo fresco marinado con especias tradicionales.',
    imageUrl: '/images/10.png',
    category: 'carniceria'
  },
  // Snacks
  {
    id: 's1',
    name: 'Mangonada Clásica',
    description: 'Mango fresco, chamoy, tajín y banderilla de tamarindo.',
    imageUrl: '/images/11.png',
    category: 'snacks'
  },
  {
    id: 's2',
    name: 'Fresas con Crema',
    description: 'Fresas frescas bañadas en nuestra crema dulce especial.',
    imageUrl: '/images/12.png',
    category: 'snacks'
  },
  {
    id: 's3',
    name: 'Aguas Frescas',
    description: 'Horchata, Jamaica, Tamarindo y sabores de temporada.',
    imageUrl: '/images/12.png',
    category: 'snacks'
  }
];
