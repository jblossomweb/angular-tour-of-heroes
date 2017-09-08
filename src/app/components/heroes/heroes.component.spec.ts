import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../../models/hero.model';
import { HeroService, HeroServiceMock } from '../../services/hero.service';

const title = 'Tour of Heroes';

describe('HeroesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        LoadingModule,
        RouterTestingModule,
        AngularFontAwesomeModule
      ],
      declarations: [
        HeroesComponent,
        HeroDetailComponent,
      ],
    })
    .overrideComponent(HeroesComponent, {
      set: {
        providers: [
          { provide: HeroService, useClass: HeroServiceMock },
        ]
      }
    })
    .compileComponents();
  }));

  it('should create the heroes component', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title '${title}'`, async(() => {
  //   const fixture = TestBed.createComponent(HeroesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual(title);
  // }));

  // it(`should render title in a h1 tag 'Welcome to ${title}!'`, async(() => {
  //   const fixture = TestBed.createComponent(HeroesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(`Welcome to ${title}!`);
  // }));

  // it(`should render hero in 2nd h2 tag '${hero.name} details'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2:nth-of-type(2)').textContent).toContain(`${hero.name} details`);
  // }));
});
