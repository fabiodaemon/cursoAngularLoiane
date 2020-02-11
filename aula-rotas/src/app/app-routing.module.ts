import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "cursos", component: CursosComponent, canActivate: [AuthGuard]},
  {path: "curso/:id", component: CursoDetalheComponent},
  {path: "naoEncontrado", component: CursoNaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
