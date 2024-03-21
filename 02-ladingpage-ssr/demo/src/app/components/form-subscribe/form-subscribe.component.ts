import { Component, signal } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubscribeSubmitService } from '../../services/subscribe-submit.service';

@Component({
  selector: 'app-form-subscribe',
  standalone: true,
  providers: [SubscribeSubmitService],
  imports: [BtnComponent, ReactiveFormsModule],
  templateUrl: './form-subscribe.component.html',
})
export class FormSubscribeComponent {
  formSubscribe: FormGroup;
  isLoading = signal<boolean>(false);

  constructor(private service: SubscribeSubmitService) {
    this.formSubscribe = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.formSubscribe.valid) {
      this.isLoading.set(true)
      const { name, email } = this.formSubscribe.value;
      this.service.handle(name, email).subscribe({
        next: (data)=>{
          console.log(data)
          this.formSubscribe.reset()
          this.isLoading.set(false)
        },
        error : (e)=>{
          console.log(e)
          this.isLoading.set(false)
        }
      });
    }

  }
}
