import { Component } from '@angular/core';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent {

  placaPapa:String = "";
  marca:String = "";
  modelo:String = "";
  anoPapa:number = 0;
  totalPapa:number = 0;

  calculoHijo(total:any){
    this.totalPapa = total
   }


}
