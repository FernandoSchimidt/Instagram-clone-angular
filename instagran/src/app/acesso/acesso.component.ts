import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity: 0, transform: 'translate(-300px, 0)'
        }),
        animate('1s 0s ease-in-out') //duração , delay, aceleração
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity: 0, transform: 'translate(300px,0)'
        }),
        animate('1s 0s ease-in-out')
        //animaçoes verticais
        // , keyframes([
        //   style({ offset: 0.90, opacity: 1, transform: 'translateX(0)' }),
        //   style({ offset: 0.94, opacity: 1, transform: 'translateX(0)' }),

        //   style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
        //   style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)' }),
        //   style({ offset: 1, opacity: 1, transform: 'translateX(0)' })
        // ]))
      ])
    ])
  ]

})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'

  public cadastro: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false
  }
  //No html
  // (@animacao-painel.start)="inicioDaAnimacao()" (@animacao-painel.done)="fimDaAnimacao()"
  //
  // public inicioDaAnimacao(): void {
  //   console.log('inicio da animação')
  // }
  // public fimDaAnimacao(): void {
  //   console.log('fim da animação')
  // }
}
