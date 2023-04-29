import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { RankingComponent } from './ranking/ranking.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
