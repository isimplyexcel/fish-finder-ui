import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IFishingSpot } from "./interfaces/fishingspot";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FishingspotService {
  private _url: string = "http://dev.fishfinder.net:3002/fishingspot";
  constructor(private http: HttpClient) {}

  getFishingSpots(): Observable<IFishingSpot[]> {
    return this.http.get<IFishingSpot[]>(this._url);
  }

  getFishingSpotById(id: string) {
    return this.http.get<IFishingSpot>(this._url + "/" + id);
  }

  createFishingSpot(fishingSpot: IFishingSpot) {
    return this.http.post(this._url, fishingSpot);
  }

  updateFishingSpot(fishingSpot: IFishingSpot) {
    return this.http.put(this._url + "/" + fishingSpot.id, fishingSpot);
  }

  deleteFishingSpot(id: string) {
    return this.http.delete(this._url + "/" + id);
  }
}
