import { Component, OnInit, Input } from '@angular/core';
import { Gig } from 'src/models/gig';
import { ModalController } from '@ionic/angular';
import { Band } from 'src/models/band';
import { BandDetailsComponent } from '../band-details/band-details.component';

@Component({
  selector: 'app-gig',
  templateUrl: './gig.component.html',
  styleUrls: ['./gig.component.scss'],
})
export class GigComponent implements OnInit {
  @Input() gig: Gig;

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  getFancyDate() {
    const date = new Date(this.gig.startTime);
    return date.toLocaleDateString();
  }

  getFancyTime() {
    const date = new Date(this.gig.startTime);
    return date.toLocaleTimeString();
  }

  getFormattedPrice() {
    const price = this.gig.ticketCost.toString();
    const dollars = price.substring(0, price.length - 2) || "0";
    const cents = price.substring(price.length - 2) || "0";

    return `$${dollars}.${cents.length < 2 ? "0" + cents : cents}`;
  }

  async openBandDetails(band: Band) {
    const modal = await this.modal.create({
      component: BandDetailsComponent,
      componentProps: { band }
    });

    modal.present();
  }
}
