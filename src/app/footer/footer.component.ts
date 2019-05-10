import { Component, OnInit } from '@angular/core';
import { OsdFooterSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-footer-sp-model/OsdFooterSPModel';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer: OsdFooterSPModel = {
    title: 'Son Pham Footer',
    link: '/sonpham-footer'
  }
  constructor() { }

  ngOnInit() {
  }

}
