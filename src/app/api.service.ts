import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://api.myjson.com/bins/c1uew - Fahen
  // https://api.myjson.com/bins/16ey9k - Lytix
  constructor(private httpClient: HttpClient) { }
  public getNews(){  
    return this.httpClient.get(`https://api.myjson.com/bins/c1uew`);
  }
  public getNewss(){  
    return this.httpClient.get(`https://api.myjson.com/bins/16ey9k`);
  }
}
