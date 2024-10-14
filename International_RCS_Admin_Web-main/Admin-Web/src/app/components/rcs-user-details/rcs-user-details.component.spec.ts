import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcsUserDetailsComponent } from './rcs-user-details.component';

describe('RcsUserDetailsComponent', () => {
  let component: RcsUserDetailsComponent;
  let fixture: ComponentFixture<RcsUserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcsUserDetailsComponent]
    });
    fixture = TestBed.createComponent(RcsUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
