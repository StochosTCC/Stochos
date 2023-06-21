import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarGrupoComponent } from './criar-grupo/criar-grupo.component';

const routes: Routes = [
  {path:"", component: CriarGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriarGrupoRoutingModule { }
