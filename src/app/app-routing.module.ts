import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FishingspotListComponent } from "./components/fishingspot-list/fishingspot-list.component";
import { FishingspotNewComponent } from "./components/fishingspot-new/fishingspot-new.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "fishingspots" },
  { path: "fishingspots", component: FishingspotListComponent },
  { path: "fishingspots/new", component: FishingspotNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  FishingspotListComponent,
  FishingspotNewComponent
];
