export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  disabled?: boolean;
};

export interface ICartItem {
  product: Product;
};