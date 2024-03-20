import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [BtnComponent, RouterLink],
  templateUrl: './email.component.html',
})
export class EmailComponent {}
