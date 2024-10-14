import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserPwdComponent } from './change-user-pwd.component';

describe('ChangeUserPwdComponent', () => {
  let component: ChangeUserPwdComponent;
  let fixture: ComponentFixture<ChangeUserPwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeUserPwdComponent]
    });
    fixture = TestBed.createComponent(ChangeUserPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
