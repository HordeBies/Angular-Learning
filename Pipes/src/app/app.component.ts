import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };
  distanceInMiles !: number;
  onNameChange(event : any){
    this.name = event.target.value;
  }
  onDateChange(event : any){
    this.date = event.target.value;
  }
  onAmountChange(event : any){
    this.amount = parseFloat(event.target.value);
  }
  onHeightChange(event : any){
    this.height = parseFloat(event.target.value);
  }
  onDistanceChange(event : any){
    this.distanceInMiles = parseFloat(event.target.value);
  }
}
