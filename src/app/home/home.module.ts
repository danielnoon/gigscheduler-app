import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { GigComponent } from '../gig/gig.component';
import { BandDetailsComponent } from '../band-details/band-details.component';
import { NewGigComponent } from '../new-gig/new-gig.component';

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
  declarations: [HomePage, GigComponent, BandDetailsComponent, NewGigComponent],
  entryComponents: [BandDetailsComponent, NewGigComponent],
  providers: [CurrencyPipe]
})
export class HomePageModule {}
