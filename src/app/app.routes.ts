import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent }
];
