import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faSplotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pwa-button',
  templateUrl: './pwa-button.component.html',
  styleUrls: ['./pwa-button.component.scss']
})
export class PwaButtonComponent implements OnInit {
  @Input() promptEvent;
  @Output() pwaChoice: EventEmitter<any> = new EventEmitter();
  faSplotch = faSplotch;

  constructor() { }

  ngOnInit() {
  }

  installPwa(): void {
    this.promptEvent.prompt();
    this.promptEvent.userChoice.then((choice) => this.pwaChoice.emit(choice.outcome));
  }

}
