import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartQueueComponent } from './smart-queue.component';

describe('SmartQueueComponent', () => {
  let component: SmartQueueComponent;
  let fixture: ComponentFixture<SmartQueueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartQueueComponent]
    });
    fixture = TestBed.createComponent(SmartQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
