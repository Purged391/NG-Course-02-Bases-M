import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Counter: {{ counter }}</h3>
        <button class="btn btn-light mx-2" (click)="increasedBy(-1)">-1</button>
        <button class="btn btn-light mx-2" (click)="resetCounter()">Reset</button>
        <button class="btn btn-light mx-2" (click)="increasedBy(+1)">+1</button>
      </div>
    </div>
  `
})

export class CounterComponent {
  public counter: number = 10;

  public increasedBy( value: number):void{
    this.counter += value;
  }

  public resetCounter():void{
    this.counter = 10;
  }
}
