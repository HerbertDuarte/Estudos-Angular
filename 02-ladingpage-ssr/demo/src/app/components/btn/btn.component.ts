import { Component, Input, Output ,EventEmitter} from '@angular/core';

type BtnVariant = 'gradient' | 'white';

@Component({
  selector: 'btn-component',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() text: string = '';
  @Input() variant: BtnVariant = 'gradient';
  @Input() loading : boolean = false;
  @Input() disable : boolean = false;
  @Output("submit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
