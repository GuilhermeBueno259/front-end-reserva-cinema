import { Injectable, signal } from '@angular/core';
@Injectable({
    providedIn: 'root',    
})

export class ArmazenamentoGlobal {
    mostrarModal = signal(false);
    tituloModal = signal('Titulo');
    mensagemModal = signal('Mensagem');
}