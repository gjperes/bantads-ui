import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface HeaderAction {
  label: string,
  icon: string,
  page: string;
}

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styles: [`.spacer { flex: 1 1 auto; }`, `.actions>button { margin: 0 0.5rem; }`],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule]
})
export class HeaderBarComponent {

  headerActions: HeaderAction[] = [
    { label: 'ENTRAR', icon: 'account_circle', page: 'entrar' },
    { label: 'CADASTRO', icon: 'assignment', page: 'cadastro' }
  ];

  constructor(private router: Router) { }

  navigate(page: string) {
    this.router.navigate([page]);
  }
}
