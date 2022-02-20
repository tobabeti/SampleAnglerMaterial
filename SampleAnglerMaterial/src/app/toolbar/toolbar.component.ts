import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { toolbar_menu } from './toolbar-menu/toolbar-menu';
import { MENUS } from './toolbar-menu/mock-toolbar-menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  menus = MENUS;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedMenu?: toolbar_menu;
  onSelect(menu: toolbar_menu): void {
    this.selectedMenu = menu;
    //this.router.navigateByUrl('/' + menu.item);
    if( this.selectedMenu.id == 0 ){
      this.router.navigateByUrl(''); // ホーム画面へ遷移
    }else{
      this.router.navigateByUrl(menu.item); // その他の画面へ遷移
    }
  }

}
