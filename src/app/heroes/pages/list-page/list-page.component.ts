import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heros.service';

@Component({
  selector: 'app-list-page',
  standalone: false,

  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService){};

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( ( heores: Hero[] ) => this.heroes = heores);
  };
}
