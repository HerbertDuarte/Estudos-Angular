import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

type Notify = {
  show: boolean;
  className: NotifyClassName;
  message: string;
};

type NotifyClassName = 'error' | 'success' | '';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  notify!: Notify;
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  onSubmit(): void {
    console.log(this.form);

    if (this.form.valid) {
      this.notify = {
        show: true,
        message: 'Formulário enviado com sucesso',
        className: 'success',
      };
      return;
    }

    const { email, name, password } = this.form.controls;
    this.notify.show = true;
    this.notify.className = 'error';
    if (name.invalid) {
      this.notify.message = 'Preencha o campo nome';
      return;
    }

    if (email.invalid) {
      this.notify.message = 'Preencha o campo email com dados válidos';
      return;
    }

    if (password.invalid) {
      this.notify.message =
        'Preencha o campo senha. A senha deve conter 4 dígitos ou mais';
      return;
    }
  }

  ngOnInit() {
    this.notify = {
      show: false,
      message: '',
      className: '',
    };
  }
}
