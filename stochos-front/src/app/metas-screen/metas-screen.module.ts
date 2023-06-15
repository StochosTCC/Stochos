import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetasScreenRoutingModule } from './metas-screen-routing.module';
import { MetasScreenComponent } from './metas-screen/metas-screen.component';


@NgModule({
  declarations: [
    MetasScreenComponent
  ],
  imports: [
    CommonModule,
    MetasScreenRoutingModule
  ]
})
export class MetasScreenModule { }
