import { Component, OnInit } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FishingspotService } from "src/app/fishingspot.service";

@Component({
  selector: "app-fishingspot-new",
  templateUrl: "./fishingspot-new.component.html",
  styleUrls: ["./fishingspot-new.component.scss"]
})
export class FishingspotNewComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fishingspotService: FishingspotService
  ) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required],
      imageURL: ["", Validators.required],
      body: ["", Validators.required]
    });
  }

  onSubmit() {
    this.fishingspotService
      .createFishingSpot(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(["fishingspots"]);
      });
  }
}
