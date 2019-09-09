import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FishingspotNewComponent } from "./fishingspot-new.component";

describe("FishingspotNewComponent", () => {
  let component: FishingspotNewComponent;
  let fixture: ComponentFixture<FishingspotNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FishingspotNewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingspotNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
