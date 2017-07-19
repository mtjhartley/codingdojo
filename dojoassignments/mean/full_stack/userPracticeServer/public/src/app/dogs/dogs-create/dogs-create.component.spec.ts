import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsCreateComponent } from './dogs-create.component';

describe('DogsCreateComponent', () => {
  let component: DogsCreateComponent;
  let fixture: ComponentFixture<DogsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
