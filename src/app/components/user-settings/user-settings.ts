import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-settings',
  imports: [MenuModule],
  templateUrl: './user-settings.html',
  styleUrl: './user-settings.scss',
  host: {
    class: 'config-panel',
  },
})
export class UserSettings implements OnInit {
  userMenuItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.userMenuItems = [
      {label: 'Customize Profile', icon: 'pi pi-id-card'},
      {label: 'Manage Groups', icon: 'pi pi-users'},
      {label: 'Manage Account', icon: 'pi pi-key'}

    ]
  }

}
