import { Component, OnInit } from "@angular/core";
import { FishingspotService } from "../../fishingspot.service";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { IFishingSpot } from "../../interfaces/fishingspot";
import { Router } from "@angular/router";

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
  constructor(
    private router: Router,
    private _fishingspotService: FishingspotService
  ) {}

  ngOnInit() {
    this._fishingspotService
      .getFishingSpots()
      .subscribe(data => (this.fishingspots = data));
  }

  deleteFishingSpot(fishingspot: IFishingSpot): void {
    this._fishingspotService
      .deleteFishingSpot(fishingspot._id)
      .subscribe(data => {
        this.fishingspots = this.fishingspots.filter(
          spot => spot !== fishingspot
        );
      });
  }

  editFishingSpot(fishingspot: IFishingSpot): void {
    localStorage.removeItem("editFishingSpotId");
    localStorage.setItem("editFishingSpotId", fishingspot._id.toString());
    let URL = "fishingspots/" + fishingspot._id + "/edit";
    this.router.navigateByUrl(URL);
    console.log(fishingspot._id);
  }
}
