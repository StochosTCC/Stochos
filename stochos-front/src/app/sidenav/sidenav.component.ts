import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }
// 14:10
  collapsed = false;
  navData = navbarData;

  ngOnInit(): void {
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void{
    this.collapsed = false;
  }

}
