import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlSpotify:string = "https://api.spotify.com/v1/";

  token:string = "BQB05kMakcTYeyFQznufCEkp_SVwBtHLGz98mXZlL11rE1qF9-BfO8UpSN30rX5I8cfL4ShFcnJQ6yR4WXs";

  private getHeaders():HttpHeaders{
    let headers =  new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });

    return headers;
  }

  constructor(public httpClient:HttpClient) {
    console.log("SpotifyService Listo");
  }

  getArtistas(termino:string){
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

    let headers =  this.getHeaders();

    return this.httpClient.get(url, {headers:headers})
               .map((data:any) => {
                 this.artistas = data.artists.items;
                 return this.artistas;
               });
  }

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;

    let headers =  this.getHeaders();

    return this.httpClient.get(url, {headers:headers});
               // .map((data:any) => {
               //   this.artistas = data.artists.items;
               //   return this.artistas;
               // });
  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;

    let headers =  this.getHeaders();

    return this.httpClient.get(url, {headers:headers})
               .map((data:any) => {
                 return data.tracks;
               });
  }
}
