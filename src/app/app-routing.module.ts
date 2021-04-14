import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionLabelComponent } from './sections/section-label/section-label.component';
import { SectionMusiciensComponent } from './sections/section-musiciens/section-musiciens.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'musiciens', component: SectionMusiciensComponent},
  {path: 'label', component: SectionLabelComponent}
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
