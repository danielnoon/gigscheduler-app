import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewBand, Band } from 'src/models/band';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.scss'],
})
export class NewBandComponent implements OnInit {
  @Output() create = new EventEmitter<Band>();

  band: NewBand = {
    name: "",
    hometown: "",
    pfp: null,
    website: null
  }

  constructor(private api: ApiService) { }

  ngOnInit() {}

  async submit() {
    const id = await this.api.request<number>({
      method: 'post',
      route: 'band',
      body: JSON.stringify(this.band)
    });

    this.create.emit({
      id,
      ...this.band
    });
  }
}
