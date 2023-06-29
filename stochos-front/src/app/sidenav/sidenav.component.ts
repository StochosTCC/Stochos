import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

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
