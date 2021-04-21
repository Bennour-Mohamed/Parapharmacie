import { Component, OnInit } from '@angular/core';
import { Tournoi } from 'src/app/models/tournoi';
import { TournoiService } from 'src/app/services/tournoi.service';

@Component({
  selector: 'app-root',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.scss']
})
export class TournoiComponent implements OnInit {

  tournois: Tournoi[];
  tournoiForm: boolean;
  isNewTournoi: boolean;
  newTournoi: any = {};
  editTournoiForm: boolean;
  editedTournoi: any = {};

  constructor(private tournoiService: TournoiService) { }

  ngOnInit() {
    this.tournois = this.getTournois();
  }

  getTournois(): Tournoi[] {
    return this.tournoiService.getTournoisFromData();
  }

  showEditTournoiForm(tournois: Tournoi) {
    if (!tournois) {
      this.tournoiForm = false;
      return;
    }
    this.editTournoiForm = true;
    this.editedTournoi = tournois;
  }

  showAddTournoiForm() {
    // resets form if edited user
    if (this.tournois.length) {
      this.newTournoi = {};
    }
    this.tournoiForm = true;
    this.isNewTournoi = true;

  }

  saveTournoi(tournoi: Tournoi) {
    if (this.isNewTournoi) {
      // add a new user
      this.tournoiService.addTournoi(tournoi);
    }
    this.tournoiForm = false;
  }

  updateTournoi() {
    this.tournoiService.updateTournoi(this.editedTournoi);
    this.editTournoiForm = false;
    this.editedTournoi = {};
  }

  removeTournoi(tournoi: Tournoi) {
    this.tournoiService.deleteTournoi(tournoi);
  }

  cancelEdits() {
    this.editedTournoi = {};
    this.editTournoiForm = false;
  }

  cancelNewTournoi() {
    this.newTournoi = {};
    this.tournoiForm = false;
  }

}
