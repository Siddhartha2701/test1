import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcsAdminreportComponent } from './rcs-adminreport.component';

describe('RcsAdminreportComponent', () => {
  let component: RcsAdminreportComponent;
  let fixture: ComponentFixture<RcsAdminreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcsAdminreportComponent]
    });
    fixture = TestBed.createComponent(RcsAdminreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
