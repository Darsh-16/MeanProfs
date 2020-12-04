import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BevragesComponent } from './bevrages.component';

describe('BevragesComponent', () => {
  let component: BevragesComponent;
  let fixture: ComponentFixture<BevragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BevragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
