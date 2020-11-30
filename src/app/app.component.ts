import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { data } from '../data/toggle.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'langgao';
  siteIsUnderConstruction = data.isUnderConstruction;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.siteIsUnderConstruction) {
      this.router.navigate(['underconstruction']);
    } else {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/underconstruction') {
            this.router.navigate(['']);
          }
        }
      });
    }
  }
}
