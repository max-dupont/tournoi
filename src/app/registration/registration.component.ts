import { Component, OnInit } from '@angular/core';
import { Player } from '../@interfaces/player';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players : Player[] = [
    {
      lastname:"",
      firstname:"",
      license:""
    },
    {
      lastname:"",
      firstname:"",
      license:""
    },
    {
      lastname:"",
      firstname:"",
      license:""
    },
    {
      lastname:"",
      firstname:"",
      license:""
    },
    {
      lastname:"",
      firstname:"",
      license:""
    },
    {
      lastname:"",
      firstname:"",
      license:""
    },
    {
      lastname:"",
      firstname:"",
      license:""
    },
    {
      lastname:"",
      firstname:"",
      license:""
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  registrationPlayers(players : Player[]) {
    console.log(players)
  }
}
