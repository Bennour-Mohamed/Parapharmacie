import { Component, OnInit } from '@angular/core';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from 'src/app/services/phase.service';

@Component({
  selector: 'app-root',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {

  phases: Phase[];
  phaseForm: boolean;
  isNewPhase: boolean;
  newPhase: any = {};
  editPhaseForm: boolean;
  editedPhase: any = {};

  constructor(private phaseService: PhaseService) { }

  ngOnInit() {
    this.phases = this.getPhases();
  }

  getPhases(): Phase[] {
    return this.phaseService.getPhaseFromData();
  }

  showEditPhaseForm(phase: Phase) {
    if (!phase) {
      this.phaseForm = false;
      return;
    }
    this.editPhaseForm = true;
    this.editedPhase = phase;
  }

  showAddPhaseForm() {
    // resets form if edited user
    if (this.phases.length) {
      this.newPhase = {};
    }
    this.phaseForm = true;
    this.isNewPhase = true;

  }

  savePhase(phase: Phase) {
    if (this.isNewPhase) {
      // add a new user
      this.phaseService.addPhase(phase);
    }
    this.phaseForm = false;
  }

  updatePhase() {
    this.phaseService.updatePhase(this.editedPhase);
    this.editPhaseForm = false;
    this.editedPhase = {};
  }

  removePhase(phase: Phase) {
    this.phaseService.deletePhase(phase);
  }

  cancelEdits() {
    this.editedPhase = {};
    this.editPhaseForm = false;
  }

  cancelNewPhase() {
    this.newPhase = {};
    this.phaseForm = false;
  }

}
