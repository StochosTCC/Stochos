import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetasComponent } from './metas/metas.component';
import { GruposComponent } from './grupos/grupos.component';
import { MetaScreenComponent } from './meta-screen/meta-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    GruposComponent,
    MetaScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
