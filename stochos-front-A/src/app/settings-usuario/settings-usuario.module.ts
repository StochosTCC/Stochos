import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsUsuarioRoutingModule } from './settings-usuario-routing.module';
import { SettingsUsuarioComponent } from './settings-usuario/settings-usuario.component';


@NgModule({
  declarations: [
    SettingsUsuarioComponent
  ],
  imports: [
    CommonModule,
    SettingsUsuarioRoutingModule
  ]
})
export class SettingsUsuarioModule { }
