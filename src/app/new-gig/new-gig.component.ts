import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Band } from 'src/models/band';
import { NewGig } from 'src/models/gig';

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

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit() {}

  formatCurrency(evt: string) {
    const rawPrice = evt.replace(/[^0-9.]/g, "");
    this.formattedPrice = this.currencyPipe.transform(rawPrice, "USD");
  }

  submit() {
    this.gig.ticketCost = parseInt(this.formattedPrice.replace(/[^0-9]/g, ""));
    console.log(this.gig);
  }
}
