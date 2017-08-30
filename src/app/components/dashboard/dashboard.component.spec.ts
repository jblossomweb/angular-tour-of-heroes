import { TestBed, async } from '@angular/core/testing';
import { LoadingModule } from 'ngx-loading';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoadingModule, RouterTestingModule],
      declarations: [
        DashboardComponent,
      ],
    }).compileComponents();
  }));

  it('should create the dashboard component', async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
