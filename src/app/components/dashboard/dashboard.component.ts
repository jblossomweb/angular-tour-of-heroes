import { Component, OnInit }   from '@angular/core';
import { Hero }                from '../../models/hero.model';
import { HeroService }         from '../../services/hero.service';

@Component({
  selector: 'dashboard',
  providers: [HeroService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { };
  heroes: Hero[] = [];
  loading: boolean = false;
  ngOnInit(): void {
    this.getHeroes()
  };
  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes.slice(1, 5);
      this.loading = false;
    });
  };
}
