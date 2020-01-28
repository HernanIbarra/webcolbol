import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './principal/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GestionComponent } from './modules/gestion/gestion.component';
import { ActividadComponent } from './modules/actividad/actividad.component';
import { GaleriaComponent } from './modules/galeria/galeria.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';




@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    ActividadComponent,
    GaleriaComponent,
    ContactoComponent,
    NoticiasComponent
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ModalModule.forRoot(),
    MatDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
