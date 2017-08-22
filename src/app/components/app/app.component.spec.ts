import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../../models/hero.model'

let title = 'Tour of Heroes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, LoadingModule],
      declarations: [
        AppComponent,
        HeroDetailComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title '${title}'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(title);
  }));

  it(`should render title in a h1 tag 'Welcome to ${title}!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Welcome to ${title}!`);
  }));

  // it(`should render hero in 2nd h2 tag '${hero.name} details'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2:nth-of-type(2)').textContent).toContain(`${hero.name} details`);
  // }));
});
