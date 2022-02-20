import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenHomeComponent } from './screen/screen-home/screen-home.component';
import { ScreenCreateServiceComponent } from './screen/screen-create-service/screen-create-service.component';
import { ScreenCreateWindowComponent } from './screen/screen-create-window/screen-create-window.component';
import { MENUS } from './toolbar/toolbar-menu/mock-toolbar-menu'

const routes: Routes = [
  { path:            '',   component: ScreenHomeComponent  }, // Home画面
  { path: MENUS[1].item,   component: ScreenCreateServiceComponent     }, // CreateService画面
  { path: MENUS[2].item,   component: ScreenCreateWindowComponent     }, // CreateWindow画面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
