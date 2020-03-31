import { Component, OnInit } from '@angular/core';
import { Band } from 'src/models/band';
import { NewGig } from 'src/models/gig';
import { ApiService } from '../api.service';

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

  formattedPrice = "";

  showNewBand = false;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  async getAvaiableBands() {
    const bands = await this.api.request<Band[]>({
      method: 'get',
      route: 'bands'
    });

    this.bands = bands;
  }

  submit() {
    this.gig.ticketCost = parseInt(this.formattedPrice.replace(/[^0-9]/g, ""));
    console.log(this.gig);
  }
}
