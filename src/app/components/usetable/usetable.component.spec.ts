import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsetableComponent } from './usetable.component';

describe('UsetableComponent', () => {
  let component: UsetableComponent;
  let fixture: ComponentFixture<UsetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
