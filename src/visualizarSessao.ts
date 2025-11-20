import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requisicoes } from '../requisicoes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'visualizar-sessao',
  templateUrl: './visualizarSessao.html',
  imports: [FormsModule],
})

export class VisualizarSessao implements OnInit {
  sessao: any;
  assentos: any;
  constructor(private route: ActivatedRoute, private requisicoes: Requisicoes, private router: Router) { }

  async ngOnInit() {
    let idSessao = Number(this.route.snapshot.paramMap.get('id'));
    this.sessao = await this.requisicoes.consultarSessao(idSessao);
    this.assentos = await this.requisicoes.consultarAssentosPorSessao(this.sessao.id);
  }

  async reservarAssento(idAssento: Number) {
    await this.requisicoes.reservarAssento(idAssento);
    this.assentos = await this.requisicoes.consultarAssentosPorSessao(this.sessao.id);
  }

  voltarParaPaginaInicial() {
    this.router.navigate(["/"]);
  }
}
