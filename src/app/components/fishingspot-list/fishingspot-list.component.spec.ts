import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingspotListComponent } from './fishingspot-list.component';

describe('FishingspotListComponent', () => {
  let component: FishingspotListComponent;
  let fixture: ComponentFixture<FishingspotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingspotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingspotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
