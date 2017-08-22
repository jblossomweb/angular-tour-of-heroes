import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

let Windstorm: Hero = {id: 1, name: 'Windstorm'}

const HEROES: Hero[] = [
  Windstorm,
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Tour of Heroes';
  heroes: Hero[] = HEROES;
  selectedHero: Hero; // = Windstorm;
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
