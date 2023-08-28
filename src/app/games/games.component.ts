import { Component, OnInit } from '@angular/core';
import { GameService } from '../@services/game.service';
import { Game } from '../@interfaces/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public games : Game[] = []

  constructor(
    private gamesService: GameService
  ) { }

  ngOnInit(): void {
    this.gamesService.getGames().toPromise().then(
      (success) => {
        this.games = success
      }
    )
  }

  updateGame(game : Game, winner? : number) {
    game.winner=winner
    this.gamesService.updateGame(game).toPromise().then(
      success => {
        console.log(success)
      }
    )
    // update game * 2
  }

}
