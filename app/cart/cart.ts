'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartStore } from '../types/cartstore';



export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const items = get().items;
        const existingItem = items.find(
          (i) => i.sku === item.sku
        );

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.sku === item.sku
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({
            items: [...items, item],
          });
        }
      },

      removeItem: (sku) =>
        set({
          items: get().items.filter(
            (i) => i.sku !== sku
          ),
        }),

      updateQuantity: (sku, quantity) =>
        set({
          items: get().items.map((i) =>
            i.sku === sku
              ? { ...i, quantity }
              : i
          ),
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
