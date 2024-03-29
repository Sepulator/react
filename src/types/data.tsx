export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductApi {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type Paths = {
  [key: string]: string;
};
