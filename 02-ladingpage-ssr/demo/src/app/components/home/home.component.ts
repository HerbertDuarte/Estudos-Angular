import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { RouterLink } from '@angular/router';
import { FormSubscribeComponent } from '../form-subscribe/form-subscribe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, BtnComponent, RouterLink, FormSubscribeComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
