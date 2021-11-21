import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { VipComponent } from './paginas/vip/vip.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { FormulariolibroComponent } from './paginas/formulariolibro/formulariolibro.component';
import { FormularioautoresComponent } from './paginas/formularioautores/formularioautores.component';
import { EditorialesComponent } from './paginas/editoriales/editoriales.component';






@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    MapaComponent,
    VipComponent,
    FormularioComponent,
    FormulariolibroComponent,
    FormularioautoresComponent,
    EditorialesComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
