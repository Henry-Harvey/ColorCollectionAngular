import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ColorService {
  hostname: string = 'https://color-collection.herokuapp.com/colors/';

  constructor(private http: HttpClient) {}

  addColor = (color: any, callback: any) => {
    this.http.post<any>(this.hostname, color).subscribe((data) => {
      callback(data);
    });
  };

  retrieveColor = (id: number, callback: any) => {
    this.http.get<any>(this.hostname + id).subscribe((data) => {
      callback(data);
    });
  };

  retrieveAllColors = (callback: any) => {
    this.http.post<any>(this.hostname + 'all', {}).subscribe((data) => {
      callback(data);
    });
  };

  editColor = (color: any, callback: any) => {
    this.http.patch<any>(this.hostname, color).subscribe((data) => {
      callback(data);
    });
  };

  deleteColor = (id: number, callback: any) => {
    this.http.delete(this.hostname + id).subscribe((data) => {
      callback(data);
    });
  };
}
