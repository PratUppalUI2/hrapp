import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinalComponent } from './ordinal.component';

describe('OrdinalComponent', () => {
  let component: OrdinalComponent;
  let fixture: ComponentFixture<OrdinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
