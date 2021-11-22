import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex08sgg2PageRoutingModule } from './ex08sgg2-routing.module';

import { Ex08sgg2Page } from './ex08sgg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex08sgg2PageRoutingModule
  ],
  declarations: [Ex08sgg2Page]
})
export class Ex08sgg2PageModule {}
