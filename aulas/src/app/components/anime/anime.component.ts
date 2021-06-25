import { Component, OnInit } from '@angular/core';
import { AnimeSService } from 'src/app/services/anime-s.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(private animeService : AnimeSService) { }

  ngOnInit(): void {
  }

    resultado : any;

    animes: any;
    getanimes(valoraPesquisar: string){
      this.animeService.getanime(valoraPesquisar).subscribe(data => {this.animes = data});
    }
}
