import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tamanho:number=200;
  cor:string="white";
  posicao1:number;
  posicao2:number;
  clicked:Boolean = false;


  changecolor(corR:string){
    this.cor=corR;
  }

  mudaTamanho(referencia){
    referencia.style.width = this.tamanho+"px";
    this.tamanho=this.tamanho*2;

  }
  desaparece(referencia){
    referencia.style.display="none";
    setTimeout(() => {
      referencia.style.display="inline";
      },2000);
  }
  teleporte(referencia){
    referencia.style.display="none";
    this.clicked=false;
     const intervalo = setTimeout(
      () => {
      this.posicao1=Math.floor(Math.random() * 90) + 1;
      this.posicao2=Math.floor(Math.random() * 90) + 1;

      referencia.style.position="absolute";
      referencia.style.top  = this.posicao1+"%";
      referencia.style.left = this.posicao2+"%";
      referencia.style.display="block";
    }, 500);
  }
  
}
