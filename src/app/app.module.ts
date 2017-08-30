import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { LoadingModule }       from 'ngx-loading';
import { AppRoutingModule }    from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { HeroService }          from './services/hero.service';

import { AppComponent }        from './components/app/app.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { HeroesComponent }     from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoadingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
