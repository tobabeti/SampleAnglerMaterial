import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCreateServiceComponent } from './screen-create-service.component';

describe('ScreenCreateServiceComponent', () => {
  let component: ScreenCreateServiceComponent;
  let fixture: ComponentFixture<ScreenCreateServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCreateServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCreateServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
