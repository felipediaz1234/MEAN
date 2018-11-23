import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { CategorizacionComponent } from './components/categorizacion/categorizacion.component';

const routes: Route[] = [
  {path: '',component: UsuariosComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'categorizacion/:id', component: CategorizacionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PacienteComponent,
    CategorizacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
