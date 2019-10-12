import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FishingspotListComponent } from "./components/fishingspot-list/fishingspot-list.component";
import { FishingspotNewComponent } from "./components/fishingspot-new/fishingspot-new.component";
import { FishingspotEditComponent } from "./components/fishingspot-edit/fishingspot-edit.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "fishingspots" },
  { path: "fishingspots", component: FishingspotListComponent },
  { path: "fishingspots/new", component: FishingspotNewComponent },
  {
    path: "fishingspots/:id/edit",
    component: FishingspotEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  FishingspotListComponent,
  FishingspotNewComponent,
  FishingspotEditComponent
];
