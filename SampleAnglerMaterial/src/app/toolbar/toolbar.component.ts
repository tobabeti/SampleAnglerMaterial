import { Component, OnInit } from '@angular/core';

import { toolbar_menu } from './toolbar-menu/toolbar-menu';
import { MENUS } from './toolbar-menu/mock-toolbar-menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  menus = MENUS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedMenu?: toolbar_menu;
  onSelect(menus: toolbar_menu): void {
    this.selectedMenu = menus;
  }

}
