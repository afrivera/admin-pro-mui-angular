import { Injectable, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menuSidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService implements OnInit{

  public menu: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(){
    this.menu = JSON.parse( localStorage.getItem('menu')!) || [];
  }
}
