import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarUsuarioRoutingModule } from './criar-usuario-routing.module';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';


@NgModule({
  declarations: [
    CriarUsuarioComponent
  ],
  imports: [
    CommonModule,
    CriarUsuarioRoutingModule
  ]
})
export class CriarUsuarioModule { }
