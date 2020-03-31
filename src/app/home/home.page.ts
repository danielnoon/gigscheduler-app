import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Gig } from 'src/models/gig';
import { ModalController } from '@ionic/angular';
import { NewGigComponent } from '../new-gig/new-gig.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  gigs: Gig[] = [];

  constructor(private api: ApiService, private modal: ModalController) {}

  ngOnInit() {
    this.getAllGigs();
  }

  async getAllGigs() {
    const gigs = await this.api.request<Gig[]>({
      method: 'get',
      route: 'gigs'
    });

    this.gigs = gigs;
  }

  async openGigCreator() {
    const modal = await this.modal.create({
      component: NewGigComponent
    });

    modal.present();
  }
}
