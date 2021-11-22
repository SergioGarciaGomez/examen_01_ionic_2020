import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ex08sgg1',
    loadChildren: () => import('./pages/ex08sgg1/ex08sgg1.module').then( m => m.Ex08sgg1PageModule)
  },
  {
    path: 'ex08sgg2',
    loadChildren: () => import('./pages/ex08sgg2/ex08sgg2.module').then( m => m.Ex08sgg2PageModule)
  },
  {
    path: 'ex08sgg3',
    loadChildren: () => import('./pages/ex08sgg3/ex08sgg3.module').then( m => m.Ex08sgg3PageModule)
  },
  {
    path: 'ex08sgg4',
    loadChildren: () => import('./pages/ex08sgg4/ex08sgg4.module').then( m => m.Ex08sgg4PageModule)
  },
  {
    path: 'edit-task',
    loadChildren: () => import('./pages/edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  },
  { 
    path: 'edit-task/:id', 
    loadChildren: () => import('./pages/edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
