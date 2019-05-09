import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from 'sonpham-lib/lib/models/headerModel/MenuItemModel';
import { LogoModel } from 'sonpham-lib/lib/models/headerModel/LogoModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItemModel[] = [{
    title : "Menu 1",
    link : "/menu1"
  },
  {
    title : "Menu 2",
    link: "/menu2"
  }
  ];

  logo: LogoModel = {
    link : "/",
    logoImage: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8d2f6247619371.587fc4b8c063b.png",
    width: 20,
    height: 20
  };
  
  constructor() { }

  ngOnInit() {
    
  }
}
