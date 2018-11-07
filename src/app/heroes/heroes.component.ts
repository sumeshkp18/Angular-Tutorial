import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROES } from '../const/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heroes = HEROES;

  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
