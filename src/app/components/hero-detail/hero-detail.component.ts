import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  providers: [HeroService],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  @Input() hero: Hero;
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => {
        this.hero = hero;
        this.loading = false;
      });
  }
  save(): void {
    this.loading = true;
    this.heroService.update(this.hero)
      .then(() => {
        this.loading = false;
        this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
}
