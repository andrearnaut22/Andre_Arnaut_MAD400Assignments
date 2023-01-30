import { Component } from '@angular/core';

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
     imageURL: '',
     body: '<p>Mixed martial arts is a great workout, a great sport, and a great way to learn how to defend yourself.</p>'
   };
   this.processContent(this.martialArt);
 } 

 processContent(content: IContent):string {
   console.log(content.body);
   return content.type ?? "EMPTY";
 }
}
