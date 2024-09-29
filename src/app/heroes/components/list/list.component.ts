import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman','Ironman','Hulk','Capitan America','Thor'];
  public deletedHero?: string;

  public removeLastHero(): void{
    this.deletedHero = this.heroeNames.pop();
    console.log(this.deletedHero)
  }
}
