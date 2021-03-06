import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs:['keg'],
  template: `
  <div>
    <h4>{{ keg.beer }}</h4>
    <p>Brewery: {{ keg.brewery }}</p>
    <p>Alcohol Content: {{ keg.alcohol }} % </p>
    <p>Price per Keg: $ {{ keg.price }}</p>
    <p>Pints Remaining: {{ keg.pint }}</p>
    <button (click)="sellPint(keg)" class="btn btn-default">Sell a pint</button>
    <button (click)="editKeg(keg)" class="btn btn-default">Edit Keg Info</button>
    <div *ngIf="keg.pint < 120" class="kegWarning">
      <p>CHANGE YR DAMN KEG OR SOMETHING!!!!!!!!</p>
    </div>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  public onSellPint: EventEmitter<Keg>;
  constructor() {
    this.onSellPint = new EventEmitter();
  }
  sellPint(sellPint:Keg){
    sellPint.pint -= 1;
    return sellPint;
  }
}
