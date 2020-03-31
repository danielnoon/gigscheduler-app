import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewBandComponent } from './new-band.component';

describe('NewBandComponent', () => {
  let component: NewBandComponent;
  let fixture: ComponentFixture<NewBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBandComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
