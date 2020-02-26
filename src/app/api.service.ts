import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  public getFahen(){      
    return this.httpClient.get(`../assets/mock/fahen.json`);
  }
  public getLytix(){  
    return this.httpClient.get(`../assets/mock/lytix.json`);
  }
  public getGameHooks(){  
    return this.httpClient.get(`../assets/mock/hooks.json`);
  }
  public getLootIndividual0to4(){
    return this.httpClient.get(`../assets/mock/individual0to4.json`);
  }
  public getLootIndividual5to10(){
    return this.httpClient.get(`../assets/mock/individual5to10.json`);
  }
  public getLootIndividual11to16(){
    return this.httpClient.get(`../assets/mock/individual11to16.json`);
  }
  public getLootIndividual17plus(){
    return this.httpClient.get(`../assets/mock/individual17plus.json`);
  }
  public getLootHoard0to4(){
    return this.httpClient.get(`../assets/mock/hoard0to4.json`);
  }
  public getLootHoard5to10(){
    return this.httpClient.get(`../assets/mock/hoard5to10.json`);
  }
  public getLootHoard11to16(){
    return this.httpClient.get(`../assets/mock/hoard11to16.json`);
  }
  public getLootHoard17plus(){
    return this.httpClient.get(`../assets/mock/hoard17plus.json`);
  }
  public gems(){
    return this.httpClient.get(`../assets/mock/gems.json`)
  }
  public art(){
    return this.httpClient.get(`../assets/mock/art.json`)
  }
}
