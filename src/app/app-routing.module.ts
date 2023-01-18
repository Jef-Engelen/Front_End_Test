import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteDetailComponent } from './sites/site-detail/site-detail.component';
import { SitesComponent } from './sites/sites/sites.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sites', component: SitesComponent},
  {path: 'sites/details', component: SiteDetailComponent},
  { path: 'site/:id', component: SiteDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
