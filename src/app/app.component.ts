import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
 <div>
 <label for="name">名字</label>
 <input type="text" id="name" [(ngModel)]="hero.name" placeholder="名字">
 <h2>{{hero.name}}</h2>
 </div>
  `,
})
export class AppComponent {
  name = 'Angular';
  title = "Hello";
  hero: Hero = {
    id: 1,
    name: "LinuxMint"
  }
}
