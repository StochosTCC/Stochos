import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetasComponent } from './metas/metas.component';

const routes: Routes = [
  {path:"", component: MetasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetasRoutingModule { }
