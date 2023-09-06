import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {

  @Input() placa:any=0;
  @Input() ano: any =0;
  @Output() total = new EventEmitter<number>()
  resultado:number = 0;
  constructor(){
    
  }

  calcularPago(){
    if(this.ano<1980){
      this.resultado = this.ano*112;
    }else{
      this.resultado = this.ano*589;
    }
    return this.resultado 
  }
  
  obtenerResultado(){
    this.ano = Number.parseInt(this.ano);
    this.total.emit(this.calcularPago());
  }

}
