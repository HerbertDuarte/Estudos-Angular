import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, BtnComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
