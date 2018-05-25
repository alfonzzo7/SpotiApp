import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];

  constructor(private http:HttpClient,
              public _spotify:SpotifyService) {
    // this.http.get("https://restcountries.eu/rest/v2/lang/es")
    //     .subscribe((data:any) => {
    //       console.log(data);
    //     });

    this._spotify.getNewReleases()
        .subscribe((data:any) => {
          this.nuevasCanciones = data;
        });
  }

  ngOnInit() {
  }

}
