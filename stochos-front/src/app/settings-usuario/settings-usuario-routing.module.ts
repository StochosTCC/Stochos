import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsUsuarioComponent } from './settings-usuario/settings-usuario.component';

const routes: Routes = [
  {path:"", component: SettingsUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsUsuarioRoutingModule { }
