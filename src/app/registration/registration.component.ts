import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players = [
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

  registrationPlayers(players : any) {
    console.log(players)
  }
}
