import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-root',
  providers: [HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { };
  loading: boolean = false;
  ngOnInit(): void {
    this.getHeroes();
  };
  title: string = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  };
  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
      this.loading = false;
    });
  };
}
