import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddQuestionComponent } from './users-add-question.component';

describe('UsersAddQuestionComponent', () => {
  let component: UsersAddQuestionComponent;
  let fixture: ComponentFixture<UsersAddQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAddQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
