import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCreateWindowComponent } from './screen-create-window.component';

describe('ScreenCreateWindowComponent', () => {
  let component: ScreenCreateWindowComponent;
  let fixture: ComponentFixture<ScreenCreateWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCreateWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCreateWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
