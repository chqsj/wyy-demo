// 负责引入公共指令 组件模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { WyyUiModule } from './wyy-ui/wyy-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzCarouselModule,
    WyyUiModule,
  ],
  exports: [
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzCarouselModule,
    CommonModule,
    WyyUiModule,
  ],
})
export class ShareModule {}
