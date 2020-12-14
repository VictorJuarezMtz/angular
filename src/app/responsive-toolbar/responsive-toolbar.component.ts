import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {


  menuItems: MenuItem[] = [
    {
      label: 'layout',
      icon: 'home_work',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      ruta:"/layout"
    },
    {
      label: 'Iniciar sesion',
      icon: 'person_add',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      ruta:"/login"
    },
    {
      label: 'form',
      icon: 'add_location',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      ruta:"/form"
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
