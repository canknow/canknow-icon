import Layout from '../../views/Layout';
import Index from '../../views/page/Index';
import Document from '../../views/page/Document';

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'document',
        name: 'document',
        component: Document
      },
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
];
