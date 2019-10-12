import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingspotEditComponent } from './fishingspot-edit.component';

describe('FishingspotEditComponent', () => {
  let component: FishingspotEditComponent;
  let fixture: ComponentFixture<FishingspotEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingspotEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingspotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
