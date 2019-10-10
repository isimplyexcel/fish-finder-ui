import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IFishingSpot } from "./interfaces/fishingspot";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FishingspotService {
  private _url: string = "http://dev.fishfinder.net:3002/fishingspot";
  constructor(private http: HttpClient) {}

  baseUrl: string = "http://dev.fishfinder.net:3002/fishingspot";

  getFishingSpots(): Observable<IFishingSpot[]> {
    return this.http.get<IFishingSpot[]>(this._url);
  }

  getFishingSpotById(id: number) {
    return this.http.get<IFishingSpot>(this.baseUrl + "/" + id);
  }

  createFishingSpot(fishingSpot: IFishingSpot) {
    return this.http.post(this.baseUrl, fishingSpot);
  }

  updateFishingSpot(fishingSpot: IFishingSpot) {
    return this.http.put(this.baseUrl + "/" + fishingSpot.id, fishingSpot);
  }

  deleteFishingSpot(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
