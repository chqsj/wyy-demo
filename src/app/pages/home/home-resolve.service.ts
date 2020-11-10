import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { first, take } from 'rxjs/internal/operators';
import {
  Banner,
  HotTag,
  Singer,
  SongSheet,
} from 'src/app/services/data-types/common-types';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer-service.service';

// 定义路由拦截的 接口返回数据类型
type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable({
  providedIn: 'root',
})

// 路由守卫
export class HomeResolverService implements Resolve<HomeDataType> {
  constructor(
    private homeServe: HomeService,
    private singerService: SingerService
  ) {}

  resolve(): Observable<HomeDataType> {
    // forkJoin  类似promise.all
    // take(1) 代表发出的流只取第一个   和first一样
    return forkJoin([
      // 这里的接口顺序要和 HomeDataType定义的返回类型顺序一致
      this.homeServe.getBanners(),
      this.homeServe.getHotTags(),
      this.homeServe.getPersonlSheetList(),
      this.singerService.getEnterSingers(),
    ]).pipe(first());
  }
}
