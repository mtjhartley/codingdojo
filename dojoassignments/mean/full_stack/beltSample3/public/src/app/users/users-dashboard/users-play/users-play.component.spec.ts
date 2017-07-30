import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPlayComponent } from './users-play.component';

describe('UsersPlayComponent', () => {
  let component: UsersPlayComponent;
  let fixture: ComponentFixture<UsersPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
