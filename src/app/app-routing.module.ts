import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'addnew', loadChildren: './addnew/addnew.module#AddnewPageModule' },
  { path: 'success', loadChildren: './success/success.module#SuccessPageModule' },
  { path: 'viewdetails', loadChildren: './viewdetails/viewdetails.module#ViewdetailsPageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'book', loadChildren: './book/book.module#BookPageModule' },
  { path: 'booknow', loadChildren: './booknow/booknow.module#BooknowPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
