import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HechosPage } from './hechos.page';

const routes: Routes = [
  {
    path: '',
    component: HechosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HechosPageRoutingModule {}
