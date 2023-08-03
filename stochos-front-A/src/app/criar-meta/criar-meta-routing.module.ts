import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarMetaComponent } from './criar-meta/criar-meta.component';

const routes: Routes = [
  {path:"", component: CriarMetaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriarMetaRoutingModule { }
