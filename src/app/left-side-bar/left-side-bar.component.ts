import { Component, OnInit, Input } from '@angular/core';
import { LeftSideBarModel } from 'sonpham-lib/lib/models/leftSideBarModel/LeftSideBarModel';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {

  leftSideBars: LeftSideBarModel[] = [{
    title : "Home",
    link : "/home",
    icon: "fas fa-home",
  },
  {
    title : "About",
    link: "/about",
    icon: "fas fa-briefcase",
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
