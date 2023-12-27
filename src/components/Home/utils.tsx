export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  thumbnail: string;
  discountPercentage: number;
  brand: string;
  creationAt: string;
  updatedAt: string;
  category: string;
  rating: number;
}

export interface ModalCardType {
  imageUrl: string;
  title: string;
}
