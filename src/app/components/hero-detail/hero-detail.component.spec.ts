import { TestBed, async }      from '@angular/core/testing';
import { FormsModule }         from '@angular/forms';
import { LoadingModule }       from 'ngx-loading';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero }                from '../../models/hero.model'

// let title = 'Tour of Heroes';
// let Windstorm: Hero = {id: 1, name: 'Windstorm'}

// const HEROES: Hero[] = [
//   Windstorm,
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

describe('HeroDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, LoadingModule, RouterTestingModule],
      declarations: [
        HeroDetailComponent,
      ],
    }).compileComponents();
  }));

  it('should create the hero-detail component', async(() => {
    const fixture = TestBed.createComponent(HeroDetailComponent);
    const heroDetail = fixture.debugElement.componentInstance;
    expect(heroDetail).toBeTruthy();
  }));

  // it(`should have as title '${title}'`, async(() => {
  //   const fixture = TestBed.createComponent(HeroDetailComponent);
  //   const heroDetail = fixture.debugElement.componentInstance;
  //   expect(heroDetail.title).toEqual(title);
  // }));

  // it(`should render hero in 2nd h2 tag '${hero.name} details'`, async(() => {
  //   const fixture = TestBed.createComponent(HeroDetailComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2:nth-of-type(2)').textContent).toContain(`${hero.name} details`);
  // }));
});
