import { Injectable } from '@angular/core';
import { Tournoi } from '../models/tournoi';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  private upersons: Tournoi[] = [
    {
      id: 1,
      tournoiName: 'Summer',
      city: 'Monastir'
    },
    {
      id: 2,
      tournoiName: 'Winter',
      city: 'Sousse'
    }
  ];

  constructor() { }

  getTournoisFromData(): Tournoi[] {
    return this.upersons;
  }

  addTournoi(tournoi: Tournoi) {
    tournoi.id = this.upersons.length + 1;
    this.upersons.push(tournoi);

  }
  updateTournoi(tournoi: Tournoi) {
    const index = this.upersons.findIndex(u => tournoi.id === u.id);
    this.upersons[index] = tournoi;
  }
  deleteTournoi(tournoi: Tournoi) {
    this.upersons.splice(this.upersons.indexOf(tournoi), 1);
  }

}
