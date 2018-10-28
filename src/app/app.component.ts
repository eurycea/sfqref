import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sfqref';
  sidenavOpen = true;
  toggleSidenav(): void {
    console.log('togglSidenav s');
    this.sidenavOpen = !this.sidenavOpen;
  }
}
