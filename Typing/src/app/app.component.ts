import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText : string = lorem.sentence().slice(0, -1).toLowerCase();
  enteredText : string = '';
  onChangeInput(event : any){
    this.enteredText = event.target.value;
  }
  compare(randomLetter : string, enteredLetter : string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
