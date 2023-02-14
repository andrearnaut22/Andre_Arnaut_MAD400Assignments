import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { martialArts } from '../data/mock-content.ts'; <- need to fix the error here
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class MartialArtsServiceService {

  constructor() { }

  // getContent(): Observable<IContent[]>  {
  //   return of(martialArts);
  // }
}
