import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input('data') items: any[] = [];
  openedItemIndex = -1;

  onClick(index: number) {
    if (this.openedItemIndex == index) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
