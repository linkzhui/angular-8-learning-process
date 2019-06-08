import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentsComponent } from './new-components.component';

describe('NewComponentsComponent', () => {
  let component: NewComponentsComponent;
  let fixture: ComponentFixture<NewComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
