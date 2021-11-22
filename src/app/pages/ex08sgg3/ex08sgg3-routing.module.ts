import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex08sgg3Page } from './ex08sgg3.page';

const routes: Routes = [
  {
    path: '',
    component: Ex08sgg3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex08sgg3PageRoutingModule {}
