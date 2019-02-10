import { Component } from '@angular/core';
import { Card } from './Card';
import { access } from 'fs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards : Card[] = [];
  get serted():Card[]{
    return this.cards.sort((a,b)=>b.votes-a.votes)
  }
  onClick(firstName:HTMLInputElement,lastName:HTMLInputElement){
    console.log(firstName.value,lastName.value);
    const card = new Card(firstName.value,lastName.value,0);
    this.cards.push(card);
    console.log(this.cards);
    firstName.value =' ';
    lastName.value =' ';
  }

}
