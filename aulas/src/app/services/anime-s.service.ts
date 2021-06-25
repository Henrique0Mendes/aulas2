import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeSService {
  constructor(private httpsAsk : HttpClient) { }

  link: string = "https://api.jikan.moe/v3/anime/1";
  
  getanime(valoraPesquisar: string){
    return this.httpsAsk.get(this.link, {
      params:{'query': valoraPesquisar}
    });

  }


}
