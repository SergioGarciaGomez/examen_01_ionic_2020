import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex08sgg4PageRoutingModule } from './ex08sgg4-routing.module';

import { Ex08sgg4Page } from './ex08sgg4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex08sgg4PageRoutingModule
  ],
  declarations: [Ex08sgg4Page]
})
export class Ex08sgg4PageModule {}
