import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotReplyComponent } from './chat-bot-reply.component';

describe('ChatBotReplyComponent', () => {
  let component: ChatBotReplyComponent;
  let fixture: ComponentFixture<ChatBotReplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBotReplyComponent]
    });
    fixture = TestBed.createComponent(ChatBotReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
