import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapLocation } from './map.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3000/api/test/locations`;
  postUrl = "http://localhost:3000/api/test/locations";

  getAllData(): Observable<MapLocation[]> {
    return this.http.get<MapLocation[]>(`${this.baseURL}`)
  }

  postData(location: MapLocation) {
    return this.http.post(this.postUrl, location)
  }

  deleteData(id:number){
    const url = `${this.postUrl}/${id}`;
    return this.http.delete(url);
  }
}
