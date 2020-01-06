import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Framer',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: ''
    }
  },
  
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Services',
    url: '/base',
    icon: 'icon-location-pin',
    children: [
      {
        name: 'Fertilizers',
        url: '/base/cards',
        icon: 'icon'
      },
      {
        name: 'Machinaries',
        url: '/base/carousels',
        icon: 'icon'
      },
      {
        name: 'Marketing',
        url: '/base/collapses',
        icon: 'icon'
      },
      {
        name: 'Storage',
        url: '/base/forms',
        icon: 'icon'
      }
     
     
    ]
  },
  
  {
    name: 'Group',
    url: '/charts',
    icon: 'icon-people'
  },
  
  {
    name: 'Banking',
    url: '/notifications',
    icon: 'icon-credit-card',
    children: [
      {
        name: 'Loans',
        url: '/notifications/alerts',
        icon: 'icon'
      },
      {
        name: 'Insurance',
        url: '/notifications/badges',
        icon: 'icon'
      }
    ]
  },
   {
    name: 'Schemes',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Crop insurance schemes',
        url: '/notifications/alerts',
        icon: 'icon'
      }
    ]
  },
   
    {
    name: 'Register',
    url: '/farreg',
    icon: 'icon-people',
   
    },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  
   

];
