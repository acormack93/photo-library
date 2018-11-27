import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface PhotoItem {
    albumId: number;
    id: number;
    title: string;
    thumbnail: string;
    thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  apiBaseUrl = 'http://jsonplaceholder.typicode.com/photos';
  constructor(
    private http: HttpClient
  ) { }

  queryApi(pageNumber: number, pageSize: number): Observable<PhotoItem[]> {
    const apiURL = `${this.apiBaseUrl}?_page=${pageNumber}&_limit=${pageSize}`;
    console.log(apiURL);
    return this.http.get<PhotoItem[]>(apiURL);
  }

}
