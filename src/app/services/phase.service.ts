import { Injectable } from '@angular/core';
import { Phase } from '../models/phase';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private upersons: Phase[] = [
    {
      id: 1,
      phaseName: 'Part one',
      point: '3.6'
    },
    {
      id: 2,
      phaseName: 'Part Two',
      point: '25'
    }
  ];

  constructor() { }

  getPhaseFromData(): Phase[] {
    return this.upersons;
  }

  addPhase(phase: Phase) {
    phase.id = this.upersons.length + 1;
    this.upersons.push(phase);

  }
  updatePhase(phase: Phase) {
    const index = this.upersons.findIndex(u => phase.id === u.id);
    this.upersons[index] = phase;
  }
  deletePhase(phase: Phase) {
    this.upersons.splice(this.upersons.indexOf(phase), 1);
  }

}
