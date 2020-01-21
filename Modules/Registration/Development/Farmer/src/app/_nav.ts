import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Farmer',
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
        url: '/base/fertilizers',
        icon: 'icon'
      },
      {
        name: 'Machinaries',
        url: '/base/machineries',
        icon: 'icon'
      },
      {
        name: 'Marketing',
        url: '/base/marketing',
        icon: 'icon'
      },
      {
        name: 'Storage',
        url: '/base/storage',
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
        url: '/base/loans',
        icon: 'icon'
      },
      {
        name: 'Insurance',
        url: '/base/insurance',
        icon: 'icon'
      }
    ]
  },
   {
    name: 'Insurance Schemes',
    url: '/notifications/alerts',
    icon: 'icon-bell',
    children: [
      {
        name: 'Crop insurance',
        url: '/base/cropinsurance',
        icon: 'icon'
      }
    ]
  },
   
    {
    name: 'Register',
    url: '/farreg',
    icon: 'icon-people',
   
    },
  
   

];
