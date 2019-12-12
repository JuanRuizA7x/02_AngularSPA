import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any;
  casa: string;

  constructor( private activatedRoute: ActivatedRoute, heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = heroesService.getHeroe( params['nombre'] );
    });

    if ( this.heroe.casa === 'Marvel' ) {
      this.casa = 'assets/img/marvel-logo.png';
    } else {
      this.casa = 'assets/img/dc-logo.png';
    }

  }

}
