import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: false,

  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url:'./list' },
    { label: 'Añadir', icon: 'add', url:'./new-hero' },
    { label: 'Buscar', icon: 'search', url:'./search' },
  ];

  get user(): User | undefined  {
    return this.authService.currentUser;
  };

  constructor(
    private authService: AuthService,
    private router: Router,
  ){};

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  };
}
