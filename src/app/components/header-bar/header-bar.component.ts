import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderAction } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule, RouterModule]
})
export class HeaderBarComponent {

  headerActions: HeaderAction[] = [
    { label: 'ENTRAR', icon: 'account_circle', page: 'entrar' },
    { label: 'CADASTRO', icon: 'person_add', page: 'cadastro' }
  ];

  constructor(private router: Router) { }

  navigate(page: string) {
    this.router.navigate([page]);
  }
}
