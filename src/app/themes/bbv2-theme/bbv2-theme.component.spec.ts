import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bbv2ThemeComponent } from './bbv2-theme.component';

describe('Bbv2ThemeComponent', () => {
  let component: Bbv2ThemeComponent;
  let fixture: ComponentFixture<Bbv2ThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bbv2ThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bbv2ThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
