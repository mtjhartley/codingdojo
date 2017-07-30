import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyangodComponent } from './supersaiyangod.component';

describe('SupersaiyangodComponent', () => {
  let component: SupersaiyangodComponent;
  let fixture: ComponentFixture<SupersaiyangodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyangodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyangodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
