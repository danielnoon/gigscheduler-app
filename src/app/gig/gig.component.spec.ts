import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigComponent } from './gig.component';

describe('GigComponent', () => {
  let component: GigComponent;
  let fixture: ComponentFixture<GigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
