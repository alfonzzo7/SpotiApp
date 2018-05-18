import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  constructor(public httpClient:HttpClient) {
    console.log("SpotifyService Listo");
  }

  getArtistas(termino:string){
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;

    let headers =  new HttpHeaders({
      'authorization': 'Bearer BQAKbEHijFH_7WrOhL1KjjkPxAaY5cNg9B2ho4E1FOZ1g5XB85KBpu-BZ1SkSquqw1nKuTJyr_n-IUl4CGY'
    });

    return this.httpClient.get(url, {headers:headers})
               .map((data:any) => {
                 this.artistas = data.artists.items;
                 return this.artistas;
               });
  }

}
