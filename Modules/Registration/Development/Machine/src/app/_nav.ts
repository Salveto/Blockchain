import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Machine',
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
    name: 'Actions',
    url: '/base',
    icon: 'icon-location-pin',
    children: [
      {
        name: 'ADD Machine',
        url: '/base/cards',
        icon: 'icon'
      },
      {
        name: 'DEL Machine',
        url: '/base/carousels',
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
