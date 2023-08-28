import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../@interfaces/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamesUrl = 'http://localhost:3000/games';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    }),
  };

  constructor(private http: HttpClient) {}
  addGame(game: Game) {
    return this.http.post<Game[]>(this.gamesUrl, game, this.httpOptions);
  }
  updateGame(game: Game) {
    return this.http.put<Game[]>(this.gamesUrl, game, this.httpOptions);
  }
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl, this.httpOptions);
  }
}
