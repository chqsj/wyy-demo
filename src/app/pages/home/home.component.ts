import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map } from 'rxjs/internal/operators';
import {
  Banner,
  HotTag,
  Singer,
  SongSheet,
} from 'src/app/services/data-types/common-types';
import { SheetService } from 'src/app/services/sheet-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public banners: Banner[];
  hotTags: HotTag[];
  sheetList: SongSheet[];
  singerList: Singer[];
  carouselActiveIndex = 0;
  @ViewChild(NzCarouselComponent, { static: true })
  private carousel: NzCarouselComponent;

  constructor(
    private route: ActivatedRoute,
    private sheetService: SheetService
  ) {
    // 使用ActivatedRoute 路由对象将路由信息打印出来 这里打印会将路由拦截器中返回的东西进行处理返回
    this.route.data
      .pipe(map((res) => res.homeDatas))
      .subscribe(([banners, hotTags, sheetList, singers]) => {
        this.banners = banners;
        this.hotTags = hotTags;
        this.sheetList = sheetList;
        this.singerList = singers;
      });
  }

  ngOnInit(): void {}
  // 面板切换回调
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  // 左右箭头切换回调
  changeSlide(type: 'pre' | 'next') {
    this.carousel[type]();
  }

  onPlaySheet(id: number) {
    console.log(id);
    this.sheetService.getSongSheetDetail(id).subscribe((res) => {
      console.log(res);
    });
  }
}
