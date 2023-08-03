import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetasRoutingModule } from './metas-routing.module';
import { MetasComponent } from './metas/metas.component';


@NgModule({
  declarations: [
    MetasComponent
  ],
  imports: [
    CommonModule,
    MetasRoutingModule
  ]
})
export class MetasModule { }
