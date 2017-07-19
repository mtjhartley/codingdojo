import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsEditComponent } from './dogs-edit.component';

describe('DogsEditComponent', () => {
  let component: DogsEditComponent;
  let fixture: ComponentFixture<DogsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
