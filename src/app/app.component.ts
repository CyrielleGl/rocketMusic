import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  yearNow = new Date().getFullYear().toString();
  appTitle = 'RocketMusic';
}
