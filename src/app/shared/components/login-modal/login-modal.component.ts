import { Component, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
  }

}
