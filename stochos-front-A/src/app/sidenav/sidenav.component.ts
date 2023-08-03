import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  data = [
    {
      number: '1',
      name: 'Grupos',
      icon: 'fa-solid fa-people-group'
    },
    {
      number: '2',
      name: 'Metas',
      icon: 'fa-solid fa-bullseye'
    }

  ]

  constructor() { }


  ngOnInit(): void {
  }


}
