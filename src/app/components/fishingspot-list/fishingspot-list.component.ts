import { Component, OnInit } from "@angular/core";
import { FishingspotService } from "../../fishingspot.service";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";

@Component({
  selector: "app-fishingspot-list",
  templateUrl: "./fishingspot-list.component.html",
  styleUrls: ["./fishingspot-list.component.scss"]
})
@NgModule({
  declarations: [FishingspotListComponent],
  imports: [MaterialModule]
})
export class FishingspotListComponent implements OnInit {
  public fishingspots = [];
  constructor(private _fishingspotService: FishingspotService) {}

  ngOnInit() {
    this._fishingspotService
      .getFishingSpots()
      .subscribe(data => (this.fishingspots = data));
  }
}
