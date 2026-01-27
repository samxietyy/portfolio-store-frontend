import { CartItem } from "./cartitem";

export type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
};