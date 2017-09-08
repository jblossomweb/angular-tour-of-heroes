import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  providers: [HeroService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }
  heroes: Hero[] = [];
  loading = false;
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(id): void {
    this.router.navigate(['/hero', id]);
  }
  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes.slice(0, 4);
      this.loading = false;
    });
  }
}
