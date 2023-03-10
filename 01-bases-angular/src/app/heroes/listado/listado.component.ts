import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman', 'ironMan', 'Hulk', 'Thor', 'Capitan America'];
  public heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando....');
    this.heroeBorrado = this.heroes.pop() || '';
  }

}

