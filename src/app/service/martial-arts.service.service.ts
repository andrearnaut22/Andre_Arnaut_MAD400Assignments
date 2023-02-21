import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockContentTs, invalidmartialArray } from '../data/mock-content.ts';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class MartialArtsServiceService {

  constructor() { }

  getContent(): Observable<IContent[]>  {
    return of(MockContentTs.martialArtsArray);
  }

  // getContentItem(index: number): Observable<IContent> {
  //   let martialArtsArrayFound: IContent = invalidmartialArray;
  //   for(let i = 0; i < MockContentTs.length; i++){
  //     if(martialArtsArray[i].id == index){
  //       martialArtsArrayFound = martialArtsArray[i];
  //     }
  //   }
  //   return of (martialArtsArrayFound);
  // }
}
