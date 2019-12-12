import { Component, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent {

  @Input() heroe: Heroe;

  constructor( private router: Router) {
  }

  verHeroe() {
    this.router.navigate( ['/heroe', this.heroe.nombre] );
  }

}
