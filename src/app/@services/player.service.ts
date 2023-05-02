import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../@interfaces/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersUrl = 'http://localhost:3000/players';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    }),
  };
  constructor(private http: HttpClient) {}

  addPlayer(player: Player) {
    return this.http.post<Player[]>(this.playersUrl, player, this.httpOptions);
  }
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl, this.httpOptions);
  }
}