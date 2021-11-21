import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorialesComponent } from './paginas/editoriales/editoriales.component';

import { FormularioComponent } from './paginas/formulario/formulario.component';
import { FormularioautoresComponent } from './paginas/formularioautores/formularioautores.component';
import { FormulariolibroComponent } from './paginas/formulariolibro/formulariolibro.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { VipComponent } from './paginas/vip/vip.component';

const routes:Routes=[
{path:'principal',component:PrincipalComponent},

{path:'vip',component:VipComponent},
{path:'formulario',component:FormularioComponent},
{path:'formulariolibro',component:FormulariolibroComponent},
{path:'formularioautores',component:FormularioautoresComponent},
{path:'editoriales',component:EditorialesComponent},
{path:'',redirectTo:'/principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
