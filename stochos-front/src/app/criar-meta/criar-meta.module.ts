import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarMetaRoutingModule } from './criar-meta-routing.module';
import { CriarMetaComponent } from './criar-meta/criar-meta.component';


@NgModule({
  declarations: [
    CriarMetaComponent
  ],
  imports: [
    CommonModule,
    CriarMetaRoutingModule
  ]
})
export class CriarMetaModule { }
