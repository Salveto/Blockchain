import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Government',
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
    name: 'Land',
    url: '/base',
    icon: 'icon-location-pin',
    children: [
      {
        name: 'Approved',
        url: '/base/cards',
        icon: 'icon',
        
      },
      {
        name: 'Pending',
        url: '/base/carousels',
        icon: 'icon'
      },
      {
        name: 'Rejected',
        url: '/base/collapses',
        icon: 'icon'
      }
     
    ]
  }
  
  
  
   

];
