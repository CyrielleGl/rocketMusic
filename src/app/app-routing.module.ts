import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionContactComponent } from './sections/section-contact/section-contact.component';
import { SectionLabelComponent } from './sections/section-label/section-label.component';
import { SectionMusiciensComponent } from './sections/section-musiciens/section-musiciens.component';
import { SectionSoutienComponent } from './sections/section-soutien/section-soutien.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'musiciens', component: SectionMusiciensComponent},
  {path: 'label', component: SectionLabelComponent},
  {path: 'soutien', component: SectionSoutienComponent},
  {path: 'contact', component: SectionContactComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
