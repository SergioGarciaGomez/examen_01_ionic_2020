import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex08sgg3PageRoutingModule } from './ex08sgg3-routing.module';

import { Ex08sgg3Page } from './ex08sgg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex08sgg3PageRoutingModule
  ],
  declarations: [Ex08sgg3Page]
})
export class Ex08sgg3PageModule {}
