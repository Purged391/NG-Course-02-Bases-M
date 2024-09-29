import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  private get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  public changeHero(): void{
    //throw 'Método no implementado';
    this.name = 'Capitan America';
  }

  public changeAge(): void{
    this.age = 37;
  }

  public resetForm(): void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Hola Mundo</h1>';
    // })
  }

}
