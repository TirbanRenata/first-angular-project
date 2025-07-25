import { Injectable } from '@angular/core';
import { PersonalDetails } from '../models/personal-details';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {
  #personalDetails: PersonalDetails = new PersonalDetails(
    "Naturiste Tirban Plant",
    "Firma cu produse prelucrate din plante naturale 100%",
    "naturistetirban@gmail.com",
    "",
    "Poienii de jos, Romania",
    ""
  )

  constructor() { }

  getPersonalDetails(): Observable<PersonalDetails> {
    return of(this.#personalDetails);
  }
}
