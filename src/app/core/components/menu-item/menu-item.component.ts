import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from "../../models/menu-item.model";
import {IconName, IconNamesEnum} from "ngx-bootstrap-icons";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
  @Output() closeMenuEvent = new EventEmitter();

  closeMenu() {
    this.closeMenuEvent.emit();
  }

  convertToIcon = (str: string): IconNamesEnum  | IconName => {
    const iconNames = Object.values(IconNamesEnum);
    if (iconNames.includes(str.toLowerCase() as IconNamesEnum)) {
      return str.toLowerCase() as IconNamesEnum;
    }
    return IconNamesEnum.Alarm;
  };
}
