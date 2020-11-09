// 和页面相关的module放到这里   引入sharemodule

import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [],
  imports: [HomeModule],
  exports: [HomeModule],
})
export class PagesModule {}
