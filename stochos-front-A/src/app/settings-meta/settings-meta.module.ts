import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsMetaRoutingModule } from './settings-meta-routing.module';
import { SettingsMetaComponent } from './settings-meta/settings-meta.component';


@NgModule({
  declarations: [
    SettingsMetaComponent
  ],
  imports: [
    CommonModule,
    SettingsMetaRoutingModule
  ]
})
export class SettingsMetaModule { }
