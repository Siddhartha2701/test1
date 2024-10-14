import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerUserComponent } from './reseller-user.component';

describe('ResellerUserComponent', () => {
  let component: ResellerUserComponent;
  let fixture: ComponentFixture<ResellerUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResellerUserComponent]
    });
    fixture = TestBed.createComponent(ResellerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
