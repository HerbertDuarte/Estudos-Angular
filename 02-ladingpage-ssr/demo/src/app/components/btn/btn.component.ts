import { Component, Input } from '@angular/core';

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
}
