import { Component, OnInit, Input } from '@angular/core';
import { Band } from 'src/models/band';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.scss'],
})
export class BandDetailsComponent implements OnInit {
  @Input() band: Band;

  constructor(private modal: ModalController) { }

  ngOnInit() {}
}
