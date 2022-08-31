import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { SidebarService } from '../../../core/services/sidebar.service';
import { MenuItem } from '../../../core/interfaces/menuSidebar.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user : User;
  public menuItems!: MenuItem[];

  constructor(
    public sidebarService: SidebarService,
    private userService : UsersService,
  ) { 
    this.menuItems = this.sidebarService.menu;
    this.user = this.userService.user;
    console.log(this.menuItems);
  }
  
  ngOnInit(): void {
    this.sidebarService.loadMenu();
    this.menuItems = this.sidebarService.menu
  }

}
