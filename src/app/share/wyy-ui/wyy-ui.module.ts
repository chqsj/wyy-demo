import { NgModule } from '@angular/core';
import { PlayCountPipe } from '../play-count.pipe';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import { WyyPlayerModule } from './wyy-player/wyy-player.module';

@NgModule({
  declarations: [SingleSheetComponent, PlayCountPipe],
  imports: [WyyPlayerModule],
  exports: [SingleSheetComponent, PlayCountPipe,WyyPlayerModule],
})
export class WyyUiModule {}
