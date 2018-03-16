import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2InfoComponent } from './step2-info.component';

describe('Step2InfoComponent', () => {
  let component: Step2InfoComponent;
  let fixture: ComponentFixture<Step2InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2InfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
