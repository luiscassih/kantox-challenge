export default function () {
  this.namespace = '/api';

  this.get('/products', function () {
    return {
      data: [
        {
          type: 'product',
          id: '1',
          attributes: {
            name: 'Green Tea',
            price: 3.11,
            code: 'GR1',
            image: 'green_tea.png',
            quantity: 0,
          },
        },
        {
          type: 'product',
          id: '2',
          attributes: {
            name: 'Strawberries',
            price: 5,
            code: 'SR1',
            image: 'strawberries.png',
            quantity: 0,
          },
        },
        {
          type: 'product',
          id: '3',
          attributes: {
            name: 'Coffee',
            price: 11.23,
            code: 'CF1',
            image: 'coffee.png',
            quantity: 0,
          },
        },
      ],
    };
  });
}
