import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { HomeComponent } from './core/pages/home/home.component';
import { AboutComponent } from './core/pages/about/about.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { MenuItemComponent } from './core/components/menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorTheme, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';
import { LaptopsComponent } from './core/pages/laptops/laptops.component';
import { SmartphonesComponent } from './core/pages/smartphones/smartphones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuItemComponent,
    LaptopsComponent,
    SmartphonesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    CollapseModule,
    FontAwesomeModule,
    NgxBootstrapIconsModule.pick(allIcons, {
      width: '1em',
      height: '1em',
      theme: ColorTheme.Body,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
