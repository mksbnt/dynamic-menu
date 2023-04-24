export interface MenuItem {
  title: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Home',
    route: '/'
  },

  {
    title: 'Contact',
    route: '/contact'
  },
  {
    title: 'About',
    route: '/about'
  },
  {
    title: 'Products',
    icon: 'list',
    children: [
      {
        title: 'Laptops',
        icon: 'laptop-fill',
        route: 'products/laptops'
      },
      {
        title: 'Smartphones',
        icon: 'phone-fill',
        route: 'products/smartphones'
      }
    ]
  },
];
