import { Component, OnInit } from '@angular/core';
import { Player } from '../@interfaces/player';
import { PlayerService } from '../@services/player.service';
import { Router } from '@angular/router';
import { GameService } from '../@services/game.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players : Player[] = [
    { lastname:"DUPONT", firstname:"Maxime", license:"4929704" },
    { lastname:"DIXNEUF", firstname:"Quentin", license:"4929706" },
    { lastname:"POIRIER", firstname:"Charlie", license:"4935759" },
    { lastname:"THUILLIER", firstname:"Clément", license:"4935892" },
    { lastname:"TESSON", firstname:"Jérémy", license:"4934689" },
    { lastname:"BECCAVIN", firstname:"Fabrice", license:"4925678" },
    { lastname:"LANGLAIS", firstname:"Eric", license:"7245869" },
    { lastname:"DIXNEUF", firstname:"Ludovic", license:"4912306" }
  ];
  constructor(
    private playersService: PlayerService,
    private gamesService: GameService,
    private router: Router  
  ) {}

  ngOnInit(): void {
  }

  registrationPlayers(players : Player[]) {
    players.forEach((player: Player) => {
      if (player.firstname && player.lastname && player.license) {
        this.playersService
          .addPlayer(player).toPromise().then(
            (success) => {
              console.log(success);
            }
          )
      }
    })
    for (let i = 1; i <= players.length/2; i++) {
      this.gamesService.addGame({
        tower:1,
        number: i,
        first_player:i,
        second_player:players.length-(i-1)
      }).toPromise().then(
        (success) => {
          console.log(success);
        }
      )
    }
    this.router.navigate(['/games'])
  }
}
