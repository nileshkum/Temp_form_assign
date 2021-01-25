import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  onSubmit(form: NgForm) {
    console.log(this.signupForm.value.email);
    console.log(this.signupForm.value.password);
    console.log(this.signupForm.value.subscription);
  }
}
