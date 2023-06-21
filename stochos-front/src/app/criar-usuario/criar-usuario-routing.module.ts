import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';

const routes: Routes = [
  {path:"", component: CriarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriarUsuarioRoutingModule { }
