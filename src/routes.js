import { ROUTES } from './constants';
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default [
  {
    path: ROUTES.main,
    exact: true,
    cache: false,
    component: Main,
    title: 'Home',
    layout: 'default',
  },
  {
    path: ROUTES.gallery,
    exact: true,
    cache: false,
    component: Gallery,
    title: 'Gallery',
    layout: 'default',
  },
  {
    path: ROUTES.contact,
    exact: true,
    cache: false,
    component: Contact,
    title: 'Home',
    layout: 'default',
  },
];
