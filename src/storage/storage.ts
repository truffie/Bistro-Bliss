interface Inutriens {
  proteins: number;
  fats: number;
  carbs: number;
}

export interface menuItem {
  id?: number;
  img: string;
  price: string;
  title: string;
  description: string;
  nutriens?: Inutriens;
}

export const menuItems: menuItem[] = [
  {
    id: 1,
    img: 'friedEggs',
    price: '$ 9.99',
    title: 'Fried Eggs',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
  {
    id: 2,
    img: 'hawaiiPizza',
    price: '$ 15.99',
    title: 'Hawaiian Pizza',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
  {
    id: 3,
    img: 'CocktailMartini',
    price: '$ 7.25',
    title: 'Martinez Cocktail',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
  {
    id: 4,
    img: 'cakeButter',
    price: '$ 20.99',
    title: 'Butterscotch Cake',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
  {
    id: 5,
    img: 'lemonadeMint',
    price: '$ 5.89',
    title: 'Mint Lemonade',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
  {
    id: 6,
    img: 'icecreamChoco',
    price: '$ 18.05',
    title: 'Chocolate Icecream',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
  {
    id: 7,
    img: 'burgerCheese',
    price: '$ 12.55',
    title: 'Cheese Burger',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
  {
    id: 8,
    img: 'classicWaffles',
    price: '$ 12.99',
    title: 'Classic Waffles',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
  },
];

export const orderCart = 0;

// interface IDishesSize {
//   S: string;
//   M: string;
//   L: string;
//   XL: string;
// }

// export const dishesSize: IDishesSize = {
//   S: '1s',
//   M: '2s',
//   L: '3s',
//   XL: '4s',
// };
