import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionMusiciensComponent } from './sections/section-musiciens/section-musiciens.component';
import { SectionLabelComponent } from './sections/section-label/section-label.component';
import { SectionSoutienComponent } from './sections/section-soutien/section-soutien.component';
import { SectionContactComponent } from './sections/section-contact/section-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SectionMusiciensComponent,
    SectionLabelComponent,
    SectionSoutienComponent,
    SectionContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
