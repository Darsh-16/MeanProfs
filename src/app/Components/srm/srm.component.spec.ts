import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmComponent } from './srm.component';

describe('SrmComponent', () => {
  let component: SrmComponent;
  let fixture: ComponentFixture<SrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
