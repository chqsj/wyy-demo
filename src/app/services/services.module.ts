// 和service相关的modu
import { InjectionToken, NgModule } from '@angular/core';

// InjectionToken 用于创建可以在provider中使用的token   令牌
export const API_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [],
  providers: [{ provide: API_CONFIG, useValue: 'http://localhost:3000/' }], // 为接口指定前缀
})
export class ServicesModule {}
