import { Injectable } from '@angular/core';
import { SESSIONITEMS } from '../sessions';

@Injectable({
  providedIn: 'root'
})
export class FakeSessionItemService {

  constructor() { }

  get() { 
    return SESSIONITEMS;
   } 
  add(sessionItem) { sessionItem.id = SESSIONITEMS.length + 1;
     SESSIONITEMS.push(sessionItem);
     } 
   delete(sessionItem) { 
       let index; index = SESSIONITEMS.indexOf(sessionItem)
        if (SESSIONITEMS.indexOf(sessionItem) >= 0) { SESSIONITEMS.splice(index, 1); 
        }

      }

    }