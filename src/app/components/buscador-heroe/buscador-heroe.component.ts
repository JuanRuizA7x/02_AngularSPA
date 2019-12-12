import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador-heroe',
  templateUrl: './buscador-heroe.component.html',
})
export class BuscadorHeroeComponent {
  heroes: Heroe[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute, private router: Router, heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = heroesService.buscarHeroe( params['termino'] );
      });
  }

}
