import { Routes } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/player-list', pathMatch: 'full' },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'team-list', component: TeamListComponent }
];
