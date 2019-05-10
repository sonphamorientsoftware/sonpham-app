import { Component, OnInit, Input } from '@angular/core';
import { OsdLeftSideBarSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-left-side-bar-sp-model/OsdLeftSideBarSPModel';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {

  leftSideBars: OsdLeftSideBarSPModel[] = [{
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
