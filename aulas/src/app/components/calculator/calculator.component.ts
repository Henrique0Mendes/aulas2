import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valor1 = 0;
  valor2 = 0;
  result;
  sinal = "";

  calcula(){
    this.result=  eval(this.valor1+ this.sinal +this.valor2);
  }
 
}