import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private cartesSubject = new BehaviorSubject<any[]>([]);
  cartes$ = this.cartesSubject.asObservable();

  constructor() { }

  ajouterCarte(carte: any) {
    const cartes = this.cartesSubject.value.slice();
    cartes.push(carte);
    this.cartesSubject.next(cartes);
  }
}
