import { Component, OnInit } from '@angular/core';
import { OsdMenuItemSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-header-sp-model/OsdMenuItemSPModel';
import { OsdLogoSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-header-sp-model/OsdLogoSPModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: OsdMenuItemSPModel[] = [{
    title : "Menu 1",
    link : "/menu1"
  },
  {
    title : "Menu 2",
    link: "/menu2"
  }
  ];

  logo: OsdLogoSPModel = {
    link : "/",
    logoImage: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8d2f6247619371.587fc4b8c063b.png",
    width: 20,
    height: 20
  };
  
  constructor() { }

  ngOnInit() {
    
  }
}
