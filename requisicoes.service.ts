import {Injectable} from '@angular/core';
import axios from 'axios';
import { ArmazenamentoGlobal } from './armazenamentoGlobal';
import { environment } from './src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class Requisicoes {
    constructor(private armazenamentoGlobal: ArmazenamentoGlobal) { }

    async retornarSessoes() {
        return (await axios.get(`${environment.apiUrl}/sessoes`)).data;
    }

    async consultarSessao(id: Number) {
        return (await axios.get(`${environment.apiUrl}/sessoes/${id}`)).data;
    }

    async consultarAssentosPorSessao(id: Number) {
        return (await axios.get(`${environment.apiUrl}/assentos/${id}`)).data;
    }

    async reservarAssento(idAssento: Number) {
        let retorno = {};
        await axios.patch(
            `${environment.apiUrl}/reservar-assento/${idAssento}`
        ).then(resposta => {
            this.armazenamentoGlobal.mostrarModal.set(true);
            this.armazenamentoGlobal.mensagemModal.set('Assento reservado com sucesso');
            this.armazenamentoGlobal.tituloModal.set('Atenção');
        }
        ).catch((erro) => {
            this.armazenamentoGlobal.mostrarModal.set(true);
            this.armazenamentoGlobal.mensagemModal.set(erro.response.data.message);
            this.armazenamentoGlobal.tituloModal.set('Atenção');
        });

        return retorno;
    }
}