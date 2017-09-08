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
  ) { }
  heroes: Hero[];
  selectedHero: Hero;
  loading = false;
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
      this.loading = false;
    });
  }
  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }
  deleteHero(hero: Hero): void {
    this.heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) { this.selectedHero = null; }
    });
  }
}
