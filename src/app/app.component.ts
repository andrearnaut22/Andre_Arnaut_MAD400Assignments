import { Component } from '@angular/core';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id = 1;
  title = 'Mixed Martial Arts';
  author = 'Andre Arnaut';
  martialArt: IContent;

 constructor() {
   this.martialArt = {
     id: 1025,
     title: "Martial Arts",
     description: '<p>Mixed martial arts is a great workout, a great sport, and a great way to learn how to defend yourself.</p>',
     author: "Andre Arnaut",
     imgSrc: "https://mark.trademarkia.com/services/logo.ashx?sid=86838304"
   };
   this.processContent(this.martialArt);
 } 

 processContent(content: IContent):string {
   console.log(content);
   return content.type ?? "EMPTY";
 }
}
