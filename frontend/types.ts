export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  imageUrl: string;
  category: 'tortillas' | 'panaderia' | 'carniceria' | 'snacks';
}

export interface CategoryInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
}
