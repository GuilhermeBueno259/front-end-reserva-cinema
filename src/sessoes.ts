import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Requisicoes } from '../requisicoes.service';

@Component({
  selector: 'sessoes',
  templateUrl: './sessoes.html',
})
export class Sessoes implements OnInit {
  sessoes: any;
  constructor(private requisicoes: Requisicoes, private router: Router) { }

  async ngOnInit() {
    this.sessoes = await this.requisicoes.retornarSessoes();
  }

  visualizarSessao(idSessao: Number) {
    this.router.navigate(["/visualizar-sessao", idSessao]);
  }

  protected readonly title = signal('reserva-cinema');
}
