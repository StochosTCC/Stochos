import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: "grupos"},
  {path:"metas", loadChildren: () => import('./metas/metas.module').then(m => m.MetasModule)},
  {path:"grupos", loadChildren: () => import('./grupos/grupos.module').then(m => m.GruposModule)},
  {path:"criar-meta", loadChildren: () => import('./criar-meta/criar-meta.module').then(m => m.CriarMetaModule)},
  {path:"criar-grupo", loadChildren: () => import('./criar-grupo/criar-grupo.module').then(m => m.CriarGrupoModule)},
  {path:"settings-grupo", loadChildren: () => import('./settings-grupo/settings-grupo.module').then(m => m.SettingsGrupoModule)},
  {path:"settings-meta", loadChildren: () => import('./settings-meta/settings-meta.module').then(m => m.SettingsMetaModule)},
  {path:"usuario", loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
  {path:"criar-usuario", loadChildren: () => import('./criar-usuario/criar-usuario.module').then(m => m.CriarUsuarioModule)},
  {path:"settings-usuario", loadChildren: () => import('./settings-usuario/settings-usuario.module').then(m => m.SettingsUsuarioModule)},
  {path:'**', loadChildren: () => import('./page404/page404.module').then(m => m.Page404Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
