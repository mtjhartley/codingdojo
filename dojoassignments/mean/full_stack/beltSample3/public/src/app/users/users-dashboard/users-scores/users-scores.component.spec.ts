import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersScoresComponent } from './users-scores.component';

describe('UsersScoresComponent', () => {
  let component: UsersScoresComponent;
  let fixture: ComponentFixture<UsersScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
