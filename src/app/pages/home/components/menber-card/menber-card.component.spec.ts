import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenberCardComponent } from './menber-card.component';

describe('MenberCardComponent', () => {
  let component: MenberCardComponent;
  let fixture: ComponentFixture<MenberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
