import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsGrupoComponent } from './settings-grupo/settings-grupo.component';

const routes: Routes = [
  {path:"", component: SettingsGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsGrupoRoutingModule { }
