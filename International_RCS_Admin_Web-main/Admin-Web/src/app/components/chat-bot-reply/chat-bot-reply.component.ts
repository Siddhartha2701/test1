import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-chat-bot-reply',
  templateUrl: './chat-bot-reply.component.html',
  styleUrls: ['./chat-bot-reply.component.css']
})
export class ChatBotReplyComponent {


  arr: any[] = [];
  options: any;
  RetVal: any;
  Success: boolean = false;
  Failed: boolean = false;
  constructor(private fb: FormBuilder, private service: ServiceService) { }

  chatbotForm = this.fb.group({
    uname: [''],
    key: [''],
    value: [''],
    suggestions: this.fb.array([this.createItem()])
  })

  createItem(): FormGroup {
    return this.fb.group(
      {
        text: [''],
        postbackData: ['']
      }
    );
  }

  InputField(s: any) {
    let search1: any = {
      search: s
    };
    // console.log(s);

    this.service.getSerchKey(search1).subscribe((res: any) => {
      this.options = res.message;
      // console.log(this.options);

    })
  }

  get suggestionsitems() {
    return this.chatbotForm.get('suggestions') as FormArray;
  }

  addItem(): void {
    this.suggestionsitems.push(this.createItem());
    // console.log(this.chatbotForm.value);
  }

  removeItem(i: any) {
    this.suggestionsitems.removeAt(i);
    console.log(this.chatbotForm.value);

  }

  save() {
    // console.log(this.chatbotForm.value);
    this.chatbotForm.controls.suggestions.controls.forEach((i: any) => {
      const rply = {
        reply: i.value
      }

      this.arr.push(rply);
    })

    const data = {
      contentMessage: {
        text: this.chatbotForm.value.value,
        suggestions: this.arr
      }
    }
    // console.log(data);
    // console.log(JSON.stringify(data));

    const sendData = {
      pUN: this.chatbotForm.value.uname,
      pKey: this.chatbotForm.value.key,
      pValue: JSON.stringify(data)
    }

    // console.log(sendData);

    this.service.addChatKeyValue(sendData).subscribe((res: any) => {
      console.log(res);
      if (res.message.RETVAL == 'Added Successfully') {
        this.RetVal = res.message.RETVAL;
        this.Success = true;
        setTimeout(() => {
          this.Success = false;
          this.chatbotForm.controls.suggestions.reset()
          this.chatbotForm = this.fb.group({
            uname: [''],
            key: [''],
            value: [''],
            suggestions: this.fb.array([this.createItem()])
          })
        }, 5000);
      }
      else if (res.message.RETVAL == 'INVALID USERNAME') {
        this.RetVal = res.message.RETVAL
        this.Failed = true;
        setTimeout(() => {
          this.Failed = false;
        }, 5000);
      }
    })
  }

}
