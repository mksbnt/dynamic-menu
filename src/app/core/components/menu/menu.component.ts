import {Component, Input} from '@angular/core';
import {MENU_ITEMS, MenuItem} from "../../models/menu-item.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuItems: MenuItem[];
  isCollapsed: boolean = true;

  constructor(private router: Router) {
    this.menuItems = MENU_ITEMS;
  }

  isActive = (menuItem: MenuItem): boolean => {
    const currentRoute = this.router.url;
    if (menuItem.route && currentRoute.includes(menuItem.route)) {
      return true;
    }
    if (menuItem.children) {
      return menuItem.children.some(child => this.isActive(child));
    }
    return false;
  };
}
