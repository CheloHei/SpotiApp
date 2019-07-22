import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  //paises: any[] = [];

  nuevasCanciones: any[] = [];
  loading:boolean;
  error:  boolean = false;
  msjError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()

      .subscribe((data: any) => {

        this.nuevasCanciones = data;
        this.loading = false;
      },(err)=>{
        this.loading =  false;
        this.error = true;
        this.msjError = err.error.error.message;
      });
  }

  /* constructor(private http: HttpClient) {
    console.log('constructor');
    
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data: any) => {
        this.paises = data;
        console.log(data);
      })
  } */

}
