import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksDetailView } from './views/books/detail/books-detail.view';
import { BooksListView } from './views/books/list/books-list.view';
import { CartView } from './views/cart/cart.view';
import { HomeView } from './views/home/home.view';

const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'cart', component: CartView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
