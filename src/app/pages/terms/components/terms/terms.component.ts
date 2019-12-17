import { Component, OnInit } from '@angular/core';

import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  faDownload = faDownload;
  
  constructor() { }

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

}
