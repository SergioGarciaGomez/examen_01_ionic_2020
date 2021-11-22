import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex08sgg4Page } from './ex08sgg4.page';

const routes: Routes = [
  {
    path: '',
    component: Ex08sgg4Page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex08sgg4PageRoutingModule {}
