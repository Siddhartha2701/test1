import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChgpwdComponent } from './chgpwd.component';

describe('ChgpwdComponent', () => {
  let component: ChgpwdComponent;
  let fixture: ComponentFixture<ChgpwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChgpwdComponent]
    });
    fixture = TestBed.createComponent(ChgpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
