import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotarrivalsComponent } from './hotarrivals.component';

describe('HotarrivalsComponent', () => {
  let component: HotarrivalsComponent;
  let fixture: ComponentFixture<HotarrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotarrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotarrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
