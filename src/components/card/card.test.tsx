import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './card';
import { Product } from '../../types/data';

const cardItem: Product = {
  id: 11,
  title: 'perfume Oil',
  description:
    'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
  price: 13,
  discountPercentage: 8.4,
  rating: 4.26,
  stock: 65,
  brand: 'Impression of Acqua Di Gio',
  category: 'fragrances',
  thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/11/1.jpg',
    'https://i.dummyjson.com/data/products/11/2.jpg',
    'https://i.dummyjson.com/data/products/11/3.jpg',
    'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  ],
};

describe('Error', () => {
  it('Renders card', () => {
    const handleOpen = vi.fn();
    render(<Card data={cardItem} handleOpen={handleOpen} />);
    expect(
      screen.getByRole('heading', {
        level: 6,
      })
    ).toHaveTextContent(cardItem.title);
  });
});
