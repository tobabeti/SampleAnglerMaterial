import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenHomeComponent } from './screen/screen-home/screen-home.component';
import { ScreenAComponent } from './screen/screen-a/screen-a.component';
import { ScreenBComponent } from './screen/screen-b/screen-b.component';
import { MENUS } from './toolbar/toolbar-menu/mock-toolbar-menu'

const routes: Routes = [
  { path:            '',   component: ScreenHomeComponent  }, // ホーム画面
  { path: MENUS[1].item,   component: ScreenAComponent     }, // A画面
  { path: MENUS[2].item,   component: ScreenBComponent     }, // B画面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
