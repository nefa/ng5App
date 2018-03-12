import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactctiveSimpleFormComponent } from './reactctive-simple-form.component';

describe('ReactctiveSimpleFormComponent', () => {
  let component: ReactctiveSimpleFormComponent;
  let fixture: ComponentFixture<ReactctiveSimpleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactctiveSimpleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactctiveSimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
