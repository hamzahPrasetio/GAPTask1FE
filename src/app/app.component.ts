import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task1fe';

  constructor(private router: Router) {}

  navigateToTeamList(): void {
    this.router.navigate(['/team-list']);
  }

  navigateToPlayerList(): void {
    this.router.navigate(['/player-list']);
  }
}
