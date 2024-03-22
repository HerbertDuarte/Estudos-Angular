import { Component, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FecthDataService } from './fecth-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FecthDataService],
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  form: FormGroup;
  float = 0;
  factor = 'USDBRL';
  loading = signal(false);
  text1 = 'USD';
  text2 = 'BRL';
  data = null;
  error = null;

  constructor(private service: FecthDataService) {
    this.form = new FormGroup({
      dolar: new FormControl('1', Validators.required),
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);

    this.service.handle(this.factor).subscribe(
      (data) => {
        console.log(data);
        this.float = data.USDBRL.ask;
      },
      (error) => {
        console.log(error);
        this.error = error;
      }
    );
    this.loading.set(false);
  }

  convert() {
    return Number(this.form.value.dolar) * this.float;
  }

  switch() {
    if (this.factor === 'USDBRL') {
      this.factor = 'BRLUSD';
      this.text1 = 'BRL';
      this.text2 = 'USD';
    } else {
      this.factor = 'USDBRL';
      this.text2 = 'BRL';
      this.text1 = 'USD';
    }

    this.loading.set(true);

    this.service.handle(this.factor).subscribe((data) => (this.data = data));
    console.log(this.data);
  }
}
