import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  public getFahen(){      
    
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/fahen.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/fahen.json`);
    }
    // return this.httpClient.get(`../rpg/assets/mock/fahen.json`);
  }
  public getLytix(){  
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/lytix.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/lytix.json`);
    }
    
  }
  public getGameHooks(){  
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/hooks.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/hooks.json`);
    }
    
  }
  public getLootIndividual0to4(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/individual0to4.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/individual0to4.json`);
    }
    
  }
  public getLootIndividual5to10(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/individual5to10.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/individual5to10.json`);
    }
    
  }
  public getLootIndividual11to16(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/individual11to16.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/individual11to16.json`);
    }
    
  }
  public getLootIndividual17plus(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../rpg/assets/mock/individual17plus.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/individual17plus.json`);
    }
    
  }
  public getLootHoard0to4(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/hoard0to4.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/hoard0to4.json`);
    }
    
  }
  public getLootHoard5to10(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/hoard5to10.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/hoard5to10.json`);
    }
    
  }
  public getLootHoard11to16(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/hoard11to16.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/hoard11to16.json`);
    }
    
  }
  public getLootHoard17plus(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/hoard17plus.json`);
    } else {
      return this.httpClient.get(`../rpg/assets/mock/hoard17plus.json`);
    }
    
  }
  public gems(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/gems.json`)
    } else {
      return this.httpClient.get(`../rpg/assets/mock/gems.json`)
    }
    
  }
  public art(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/art.json`)
    } else {
      return this.httpClient.get(`../rpg/assets/mock/art.json`)
    }
    
  }
  public magItem(){
    if(window.location.host == "localhost:4200"){
      return this.httpClient.get(`../assets/mock/magItem.json`)
    } else {
      return this.httpClient.get(`../rpg/assets/mock/magItem.json`)
    }
    
  }
}
