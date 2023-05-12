import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EplService {

  constructor(private hc: HttpClient) { }

  LeagueTable():Observable<any> {
    return this.hc.get('https://api-football-standings.azharimm.site/leagues/eng.1');
  }
}
