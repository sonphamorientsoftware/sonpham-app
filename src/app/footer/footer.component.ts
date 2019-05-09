import { Component, OnInit } from '@angular/core';
import { FooterModel } from 'sonpham-lib/lib/models/footerModel/FooterModel';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer: FooterModel = {
    title: 'Son Pham Footer',
    link: '/sonpham-footer'
  }
  constructor() { }

  ngOnInit() {
  }

}
