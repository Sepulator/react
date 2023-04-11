import { rest } from 'msw';

export const handlers = [
  rest.get(`https://dummyjson.com/products/search`, (req, res, ctx) => {
    const query = req.url.searchParams.get('q');

    if (query === 'JavaScript') {
      return res(
        ctx.json({
          products: [],
          total: 0,
          skip: 0,
          limit: 0,
        })
      );
    }

    return res(
      ctx.json({
        products: [
          {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            images: [
              'https://i.dummyjson.com/data/products/1/1.jpg',
              'https://i.dummyjson.com/data/products/1/2.jpg',
              'https://i.dummyjson.com/data/products/1/3.jpg',
              'https://i.dummyjson.com/data/products/1/4.jpg',
              'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            ],
          },
        ],
        total: 100,
        skip: 0,
        limit: 1,
      })
    );
  }),

  rest.get(`https://dummyjson.com/products/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id: id,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/3.jpg',
          'https://i.dummyjson.com/data/products/1/4.jpg',
          'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        ],
      })
    );
  }),
];
