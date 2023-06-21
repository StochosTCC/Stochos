import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsMetaComponent } from './settings-meta/settings-meta.component';

const routes: Routes = [
  {path:"", component: SettingsMetaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsMetaRoutingModule { }
