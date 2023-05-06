import { Component, OnInit } from '@angular/core';
import { Player } from '../@interfaces/player';
import { PlayerService } from '../@services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players : Player[] = [
    { lastname:"", firstname:"", license:"" },
    { lastname:"", firstname:"", license:"" },
    { lastname:"", firstname:"", license:"" },
    { lastname:"", firstname:"", license:"" },
    { lastname:"", firstname:"", license:"" },
    { lastname:"", firstname:"", license:"" },
    { lastname:"", firstname:"", license:"" },
    { lastname:"", firstname:"", license:"" }
  ];
  constructor(
    private playersService: PlayerService,
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
    this.router.navigate(['/games'])
  }
}
