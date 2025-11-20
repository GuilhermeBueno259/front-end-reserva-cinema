import { Routes } from '@angular/router';
import { VisualizarSessao } from '../visualizarSessao';
import { Sessoes } from '../sessoes';

export const routes: Routes = [
    {
        path: "",
        component: Sessoes
    },
    {
        path: "visualizar-sessao/:id",
        component: VisualizarSessao
    }
];
