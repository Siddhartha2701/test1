import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcsTemplatesComponent } from './rcs-templates.component';

describe('RcsTemplatesComponent', () => {
  let component: RcsTemplatesComponent;
  let fixture: ComponentFixture<RcsTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcsTemplatesComponent]
    });
    fixture = TestBed.createComponent(RcsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
