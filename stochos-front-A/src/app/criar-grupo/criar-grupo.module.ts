import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarGrupoRoutingModule } from './criar-grupo-routing.module';
import { CriarGrupoComponent } from './criar-grupo/criar-grupo.component';


@NgModule({
  declarations: [
    CriarGrupoComponent
  ],
  imports: [
    CommonModule,
    CriarGrupoRoutingModule
  ]
})
export class CriarGrupoModule { }
