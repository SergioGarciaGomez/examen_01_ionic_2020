import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex08sgg1PageRoutingModule } from './ex08sgg1-routing.module';
import { Ex08sgg1Page } from './ex08sgg1.page';
import { BiosBootPriorityComponent } from 'src/app/components/bios-boot-priority/bios-boot-priority.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex08sgg1PageRoutingModule
  ],
  declarations: [Ex08sgg1Page, BiosBootPriorityComponent]
})
export class Ex08sgg1PageModule {}
