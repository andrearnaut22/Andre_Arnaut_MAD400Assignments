import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockContentTs } from '../data/mock-content.ts';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class MartialArtsServiceService {

  constructor() { }

  getContent(): Observable<IContent[]>  {
    return of(MockContentTs.martialArts);
  }
}
