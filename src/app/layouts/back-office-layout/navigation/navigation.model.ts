import { NavigationModelInterface } from '@gaxon/components';

export class NavigationModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'action',
        title: 'Action',
        type: 'group',
        icon: 'fa fa-building',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            icon: 'fa fa-home',
            url: '/dashboard',
          },
          {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            icon: 'fa fa-bell',
            url: '/notification',
          },
          {
            id: 'chat',
            title: 'Chat',
            type: 'item',
            icon: 'fa fa-comment-dots',
            url: '/chat',
          },
        ]
      },
      {
        id: 'reference',
        title: 'Reference',
        type: 'group',
        icon: 'fa fa-building',
        children: [
          {
            id: 'contributors',
            title: 'Contributors',
            type: 'item',
            icon: 'fa fa-users',
            url: '/business/contributors'
          },
          {
            id: 'workplace',
            title: 'Workplace',
            type: 'item',
            icon: 'fa fa-search-location',
            url: '/business/workplace'
          },
          {
            id: 'job',
            title: 'Job',
            type: 'item',
            icon: 'fas fa-envelope-open-text',
            url: '/business/job'
          },
          {
            id: 'powerUp',
            title: 'Power Up',
            type: 'item',
            icon: 'fa fa-briefcase',
            url: '/business/assets/master'
          },
          {
            id: 'form',
            title: 'Form',
            type: 'item',
            icon: 'fa fa-book-reader',
            url: '/business/questionnaire'
          },
          {
            id: 'items',
            title: 'Items',
            type: 'item',
            icon: 'fa fa-sitemap',
            url: '/business/items'
          },
          {
            id: 'data',
            title: 'Data',
            type: 'item',
            icon: 'fa fa-database',
            url: '/business/data'
          },
          {
            id: 'report',
            title: 'Report',
            type: 'item',
            icon: 'fa fa-copy',
            url: '/business/report'
          },
          // {
          //   id: 'payment',
          //   title: 'Payment Setup',
          //   type: 'item',
          //   icon: 'fa fa-money-check-alt',
          //   url: '/business/payment'
          // },
        ]
      },
      {
        id: 'supplier',
        title: 'Supplier',
        type: 'group',
        icon: 'fa fa-building',
        children: [
          {
            id: 'products',
            title: 'Products',
            type: 'item',
            icon: 'fa fa-tags',
            url: '/supplier/products'
          },
          {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            icon: 'fa fa-shopping-cart',
            url: '/supplier/orders'
          }
        ]
      },
      {
        id: 'others',
        title: 'Others',
        type: 'group',
        icon: 'fa fa-building',
        children: [
          {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            icon: 'fa fa-user',
            url: '/profile',
          },
          {
            id: 'settings',
            title: 'Setting',
            type: 'item',
            icon: 'fa fa-cog',
            url: '/setting',
          },
          // {
          //   id: 'upgrade',
          //   title: 'Upgrade Account',
          //   type: 'item',
          //   icon: 'fa fa-star',
          //   url: '/upgrade',
          // },
        ]
      }
    ];
  }
}
