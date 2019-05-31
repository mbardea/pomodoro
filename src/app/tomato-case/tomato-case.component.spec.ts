import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoCaseComponent } from './tomato-case.component';

describe('TomatoCaseComponent', () => {
  let component: TomatoCaseComponent;
  let fixture: ComponentFixture<TomatoCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomatoCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
