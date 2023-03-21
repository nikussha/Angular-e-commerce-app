import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewdetailsComponent } from './home/product/viewdetails/viewdetails.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { MensectionComponent } from './mensection/mensection.component';
import { WomensectionComponent } from './womensection/womensection.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'electronics',
    component: ElectronicsComponent,
  },
  {
    path: 'women',
    component: WomensectionComponent,
  },
  {
    path: 'men',
    component: MensectionComponent,
  },
  {
    path: 'jewelery',
    component: JewelryComponent,
  },
  {
    path: 'viewdetails/:id',
    component: ViewdetailsComponent,
  },
  {
    path: '404',
    component: PagenotfoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
