import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent, children: [
        {path: 'novo', component: AlunoFormComponent},
        // o aluno/novo tem q vir antes do que tem id (parametro dinamico) pois senao da coalisão de rotas
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
    declarations: [],

})

export class AlunosRoutingModule {}