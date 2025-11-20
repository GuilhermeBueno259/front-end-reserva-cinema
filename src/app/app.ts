import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArmazenamentoGlobal } from './../../armazenamentoGlobal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  constructor(public armazenamentoGlobal: ArmazenamentoGlobal) { }

  fecharModal() {
    this.armazenamentoGlobal.mostrarModal.set(false);
  }

  protected readonly title = signal('reserva-cinema');
}
