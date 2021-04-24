import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { ProductosComponent } from './productos/productos.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    ProductosComponent,
    AdministrativosComponent,
    ProfesoresComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
