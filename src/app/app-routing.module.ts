import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/pages/home/home.component";
import {AboutComponent} from "./core/pages/about/about.component";
import {ContactComponent} from "./core/pages/contact/contact.component";
import {LaptopsComponent} from "./core/pages/laptops/laptops.component";
import {SmartphonesComponent} from "./core/pages/smartphones/smartphones.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'products/laptops', component: LaptopsComponent},
  { path: 'products/smartphones', component: SmartphonesComponent},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
