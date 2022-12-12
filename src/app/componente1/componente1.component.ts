import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  numero:any=0;
  sueldos=[1700, 1600, 2000];

  almacenar ()
  {
    localStorage.setItem('Valor total', this.numero)
  }
  mostrar ()
  {
    localStorage.getItem ('Valor total')
  }
}