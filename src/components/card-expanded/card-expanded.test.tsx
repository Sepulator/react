import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Product } from '../../types/data';
import { CardExpanded } from './card-expanded';

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
  it('Renders card expanded', () => {
    const handleClose = vi.fn();
    const isPending = false;
    const error = 'false';
    render(
      <CardExpanded data={cardItem} isPending={isPending} error={error} handleClose={handleClose} />
    );
    expect(
      screen.getByRole('heading', {
        level: 6,
      })
    ).toHaveTextContent(cardItem.title);
  });
});
