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
  loading:boolean;
  error:boolean = false;
  mensajeError:string;

  constructor(private http:HttpClient,
              public _spotify:SpotifyService) {
    // this.http.get("https://restcountries.eu/rest/v2/lang/es")
    //     .subscribe((data:any) => {
    //       console.log(data);
    //     });

    this.loading = true;

    this._spotify.getNewReleases()
        .subscribe((data:any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, (errorS) => {
          this.mensajeError = errorS.error.error.message;
          this.error = true;
          this.loading = false;
        });
  }

  ngOnInit() {
  }

}
