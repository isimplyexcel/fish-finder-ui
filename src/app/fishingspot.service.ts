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

  getFishingSpots(): Observable<IFishingSpot[]> {
    return this.http.get<IFishingSpot[]>(this._url);
  }
}
