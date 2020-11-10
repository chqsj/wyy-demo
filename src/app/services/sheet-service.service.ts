import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { SongSheet } from './data-types/common-types';
import { API_CONFIG, ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule,
})
export class SheetService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string
  ) {}
  getSongSheetDetail(id: number): Observable<SongSheet> {
    // 单个参数可以使用HttpParams.set()的方式
    const params = new HttpParams().set('id', id.toString());
    return this.http
      .get(this.uri + 'playlist/detail', { params })
      .pipe(map((res: { playlist: SongSheet }) => res.playlist));
  }
}
