import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-subscribe',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule],
  templateUrl: './form-subscribe.component.html',
})
export class FormSubscribeComponent {
  formSubscribe: FormGroup;

  constructor(){
    this.formSubscribe = new FormGroup({
      name : new FormControl("", [Validators.required]),
      email : new FormControl("", [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    console.log(this.formSubscribe.value)
  }
}
