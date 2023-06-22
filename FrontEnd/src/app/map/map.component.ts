import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './map.service';
import { MapLocation } from './map.model';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  constructor(private mapService: MapService) { }

  private map;
  private marker: L.Marker;
  mapLocations: MapLocation[] = [];
  postLocation: MapLocation;

  onSave() {
    this.map.whenReady(() => {
      const center = this.map.getCenter();

      this.postLocation = center;
      this.postLocation.datetime = new Date();

      this.mapLocations.push(this.postLocation);

      this.mapService.postData(this.postLocation)
        .subscribe({
          complete: () => {
            this.mapService.getAllData()
              .subscribe(data => {
                this.mapLocations = data;
              })
          }
        }

        )
    });
  }


  initMap(): void {
    this.map = L.map('map', {
      center: [40.79971, 29.4317],
      zoom: 18,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 50,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit() {
    this.mapService.getAllData()
      .subscribe(data => {
        this.mapLocations = data;
        console.log("map jsonları: ", JSON.stringify(this.mapLocations, null, 2));
      })
  }

  exportTojson() {
    let exportData = this.mapLocations;
    return saveAs(
      new Blob([JSON.stringify(exportData, null, 2)], { type: 'JSON' }), 'koordinatlar.json'
    );
  }

  deleteLocation(id: number) {

    this.mapLocations = this.mapLocations.filter(obje => obje.id !== id);
    this.mapService.deleteData(id).subscribe(data => {
      // console.log(data);
    });
  }

  addMarker(lat:number, lng:number) {
    this.map.whenReady(() => {
      const center = this.map.getCenter();
      console.log("lat: ",lat)
      console.log("lng: ",lng)

      this.marker = L.marker([lat,lng]).addTo(this.map);
    });
  }


}
