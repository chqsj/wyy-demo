import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Singer } from './data-types/common-types';
import { API_CONFIG, ServicesModule } from './services.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

type singerParams = {
  offset: number;
  limit: number;
  cat?: string;
};
const defaultParams: singerParams = {
  offset: 0,
  limit: 9,
  cat: '5001',
};

@Injectable({
  providedIn: ServicesModule,
})
export class SingerService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string
  ) {}
  getEnterSingers(args: singerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http
      .get(this.uri + 'artist/list', { params })
      .pipe(map((res: { artists: Singer[] }) => res.artists));
  }
}
