import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockContentTs, invalidmartialArray } from '../data/mock-content.ts';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class MartialArtsServiceService {
  addContentItem(testAddDiscipline: IContent): Observable<IContent[]> {
    MockContentTs.push(testAddDiscipline);
    //return of(MockContentTs) need to fix this error
  }

  constructor() { }

  getContent(): Observable<IContent[]>  {
    return of(MockContentTs.martialArtsArray);
  }

  getContentItem(index: number): Observable<IContent> {
    let martialArtsArrayFound: IContent = invalidmartialArray;
    for(let i = 0; i < MockContentTs.length; i++){
      // if(martialArtsArray[i].id == index){
      //   martialArtsArrayFound = martialArtsArray[i];
      // } fix these errors as well
    }
    return of (martialArtsArrayFound);
  }
}
