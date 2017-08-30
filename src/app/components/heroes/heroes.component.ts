import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes',
  providers: [HeroService],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { };
  loading: boolean = false;
  ngOnInit(): void {
    this.getHeroes();
  };
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  };
  gotoDetail(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
  };
  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
      this.loading = false;
    });
  };
}
