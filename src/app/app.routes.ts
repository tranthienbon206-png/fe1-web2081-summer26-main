import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './pages/contact/contact';
import { Stories } from './pages/stories/stories';
import { Products } from './products/products';
import { Register } from './register/register';

import { AddProduct } from './add-product/add-product';
import { AddStory } from './add-story/add-story';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'stories',
    component: Stories
  },
  {
    path: 'products',
    component: Products
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'add-product',
    component: AddProduct
  },
  {
    path: 'add-story',
    component: AddStory
  }
];