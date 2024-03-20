import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

type BtnVariant = "gradient" | "white"

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
})
export class BtnComponent {

  @Input() text : string = ""
  @Input() variant : BtnVariant = "gradient"
  @Output("submit") onSubmit = new EventEmitter()

  submit(){
    this.onSubmit.emit();
  }
}
