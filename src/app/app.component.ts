import { Component, OnDestroy } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'sfqref';
  sidenavOpen = true;
  watcher: Subscription;
  activeMediaQuery = '';

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      console.log(this.activeMediaQuery);
      if ( change.mqAlias === 'xs') {
         this.sidenavOpen = false;
      }
    });
  }

  toggleSidenav(): void {
    console.log('togglSidenav s');
    this.sidenavOpen = !this.sidenavOpen;
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
