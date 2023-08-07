import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) {
   }

   ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
   }
   ngOnDestroy(){
      this.el.nativeElement.remove();
   }
   onCloseClick(){
      this.close.emit();
   }
}
