import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyyPlayerComponent } from './wyy-player.component';

describe('WyyPlayerComponent', () => {
  let component: WyyPlayerComponent;
  let fixture: ComponentFixture<WyyPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyyPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WyyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
