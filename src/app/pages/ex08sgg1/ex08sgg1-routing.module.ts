import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex08sgg1Page } from './ex08sgg1.page';

const routes: Routes = [
  {
    path: '',
    component: Ex08sgg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex08sgg1PageRoutingModule {}
