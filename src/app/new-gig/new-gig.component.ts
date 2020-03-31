import { Component, OnInit } from '@angular/core';
import { Band, NewBand } from 'src/models/band';
import { NewGig } from 'src/models/gig';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { NewBandComponent } from '../new-band/new-band.component';

@Component({
  selector: 'app-new-gig',
  templateUrl: './new-gig.component.html',
  styleUrls: ['./new-gig.component.scss'],
})
export class NewGigComponent implements OnInit {
  gig: NewGig = {
    name: "",
    startTime: new Date().toISOString(),
    description: "",
    ticketCost: 0,
    ticketUrl: "",
    bands: []
  }

  bands: Band[] = [];
  selectedBands: Band[] = [];

  rawPrice: number;

  showNewBand = false;

  constructor(private api: ApiService, private modal: ModalController) {}

  ngOnInit() {
    this.getAvaiableBands();
  }

  async getAvaiableBands() {
    const bands = await this.api.request<Band[]>({
      method: 'get',
      route: 'bands'
    });

    this.bands = bands;
  }

  async addBand(ev: CustomEvent) {
    if (ev.detail.value != -1) {
      const band = this.bands.find(band => band.id === ev.detail.value);
      this.selectedBands.push(band);
      this.bands = this.bands.filter(band => band.id !== ev.detail.value);
    } else {
      this.showNewBand = true;
    }
  }

  createBand(band: Band) {
    this.selectedBands.push(band);
    this.showNewBand = false;
  }

  toggleHeadlining(band: Band) {
    band.headlining = !band.headlining;
  }

  async submit() {
    this.gig.ticketCost = this.rawPrice;
    this.gig.bands = this.selectedBands.map(band => ({ id: band.id, headlining: band.headlining ? true : false }))
    
    await this.api.request({
      method: 'post',
      route: 'gig',
      body: JSON.stringify(this.gig)
    });

    this.modal.dismiss({
      created: true
    });
  }
}
