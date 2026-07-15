import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './products/products';
import { Stories } from './pages/stories/stories';
import { AddProduct } from './add-product/add-product';
import { Register } from './register/register';

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
    path: 'products',
    component: Products
  },
  {
    path: 'stories',
    component: Stories
  },
  {
    path: 'add-product',
    component: AddProduct
  },
  {
    path: 'register',
    component: Register
  }
];