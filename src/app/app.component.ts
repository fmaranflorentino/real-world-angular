import { Component, OnInit } from '@angular/core';

import { slideInAnimation } from './shared/helpers/animations';
import { NavigationEnd, Router } from '@angular/router';
import { wait } from './shared/helpers/ui.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  title = 'marketclub-ui';
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzYyNjYzNDMsImV4cCI6MTU3NjAwNzE0MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.lp85wf8ggYRPN0Lq1ImDjW0oC5qrhYMKQCGU6rg84Xo'

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        wait(100)
        .then(() => {
          document.body.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
  });
  }

}
