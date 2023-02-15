import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ApisComponent } from './components/apis/apis.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { FilmsComponent } from './components/films/films.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'apis', component: ApisComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'cocktail', component:CocktailComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
