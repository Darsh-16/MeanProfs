import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttaComponent } from './atta.component';

describe('AttaComponent', () => {
  let component: AttaComponent;
  let fixture: ComponentFixture<AttaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
