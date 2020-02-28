import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// switch(window.location.host) {
//   case 'localhost:4200':
//     let serve2 = "../assets/mock/"
//     break;
//   default:
//     serve2 = "../rpg/assets/mock/"
// }
@Injectable({
  providedIn: 'root'
})
export class ApiService {  
  
  serve = "../assets/mock/"
  serve2 = "../rpg/assets/mock/"
  constructor(private httpClient: HttpClient) { }  
  public getFahen(){      
    return this.httpClient.get(`${this.serve}fahen.json`);
  }
  public getLytix(){  
    return this.httpClient.get(`${this.serve}lytix.json`);    
  }
  public getGameHooks(){  
    return this.httpClient.get(`${this.serve}hooks.json`);
  }
  public getLootIndividual0to4(){    
    return this.httpClient.get(`${this.serve}individual0to4.json`);
  }
  public getLootIndividual5to10(){
    return this.httpClient.get(`${this.serve}individual5to10.json`);
  }
  public getLootIndividual11to16(){
    return this.httpClient.get(`${this.serve}individual11to16.json`);
  }
  public getLootIndividual17plus(){
    return this.httpClient.get(`${this.serve}individual17plus.json`);
  }
  public getLootHoard0to4(){
    return this.httpClient.get(`${this.serve}hoard0to4.json`);
  }
  public getLootHoard5to10(){
    return this.httpClient.get(`${this.serve}hoard5to10.json`);
  }
  public getLootHoard11to16(){
    return this.httpClient.get(`${this.serve}hoard11to16.json`);
  }
  public getLootHoard17plus(){
    return this.httpClient.get(`${this.serve}hoard17plus.json`);
  }
  public gems(){
    return this.httpClient.get(`${this.serve}gems.json`)
  }
  public art(){
    return this.httpClient.get(`${this.serve}art.json`)
  }
  public magItem(){
    return this.httpClient.get(`${this.serve}magItem.json`)
  }
}
