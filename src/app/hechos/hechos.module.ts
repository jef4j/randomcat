import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HechosPageRoutingModule } from './hechos-routing.module';

import { HechosPage } from './hechos.page';
import { CardsComponent } from '../components/cards/cards.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HechosPageRoutingModule
  ],
  declarations: [HechosPage, CardsComponent]
})
export class HechosPageModule {}
