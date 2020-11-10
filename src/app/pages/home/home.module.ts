import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';
import { MenberCardComponent } from './components/menber-card/menber-card.component';

@NgModule({
  declarations: [HomeComponent, WyCarouselComponent, MenberCardComponent],
  imports: [ShareModule, HomeRoutingModule],
})
export class HomeModule {}
