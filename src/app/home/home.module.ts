import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { GigComponent } from '../gig/gig.component';
import { BandDetailsComponent } from '../band-details/band-details.component';
import { NewGigComponent } from '../new-gig/new-gig.component';
import { NewBandComponent } from '../new-band/new-band.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, GigComponent, BandDetailsComponent, NewGigComponent, NewBandComponent],
  entryComponents: [BandDetailsComponent, NewGigComponent],
  providers: [CurrencyPipe]
})
export class HomePageModule {}
