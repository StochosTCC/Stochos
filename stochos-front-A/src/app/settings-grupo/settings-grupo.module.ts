import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsGrupoRoutingModule } from './settings-grupo-routing.module';
import { SettingsGrupoComponent } from './settings-grupo/settings-grupo.component';


@NgModule({
  declarations: [
    SettingsGrupoComponent
  ],
  imports: [
    CommonModule,
    SettingsGrupoRoutingModule
  ]
})
export class SettingsGrupoModule { }
