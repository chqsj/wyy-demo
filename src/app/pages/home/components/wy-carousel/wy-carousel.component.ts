import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
})
export class WyCarouselComponent implements OnInit {
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  // type:'pre'|'next'  类型只能为pre或者next
  onChangeCarousel(type: 'pre' | 'next') {
    this.changeSlide.emit(type);
  }
}
