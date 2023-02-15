import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { AboutComponent } from './components/about/about.component';
import { ApisComponent } from './components/apis/apis.component';
import { FilmsComponent } from './components/films/films.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WeatherComponent,
    CocktailComponent,
    AboutComponent,
    ApisComponent,
    FilmsComponent,
    ContactComponent,
    LoaderComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
