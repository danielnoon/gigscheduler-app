import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewGigComponent } from './new-gig.component';

describe('NewGigComponent', () => {
  let component: NewGigComponent;
  let fixture: ComponentFixture<NewGigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
