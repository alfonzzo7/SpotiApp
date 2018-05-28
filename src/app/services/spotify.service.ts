import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  token:string = "BQDfwhIRECMzyukyyba6kY4SqTW0TSrPRWwjNAT71x2UYt4cf7Z4iG6aj1FX2mlcw7NLuk3sa6Or2LTdXH4";

  private getHeaders():HttpHeaders{
    let headers =  new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });
    return headers;
  }

  constructor(public httpClient:HttpClient) {
    console.log("SpotifyService Listo");
  }

  getQuery(query:string){
    const url:string = `https://api.spotify.com/v1/${query}`;
    return this.httpClient.get(url, {headers:this.getHeaders()});
  }

  getNewReleases(){
    return this.getQuery("browse/new-releases")
               .map((data:any) => {
                 return data.albums.items;
               });
  }

  getArtistas(termino:string){
    return this.getQuery(`search?query=${termino}&type=artist&limit=20`)
               .map((data:any) => {
                 this.artistas = data.artists.items;
                 return this.artistas;
               });
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
               // .map((data:any) => {
               //   this.artistas = data.artists.items;
               //   return this.artistas;
               // });
  }

  getTop(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
               .map((data:any) => {
                 return data.tracks;
               });
  }
}
