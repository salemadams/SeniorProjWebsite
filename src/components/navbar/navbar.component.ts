import {Component, OnInit} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {RippleModule} from 'primeng/ripple';
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {InputIconModule} from "primeng/inputicon";
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem} from "primeng/api";

@Component({
    selector: "navbar",
    templateUrl: "navbar.component.html",
    standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, InputSwitchModule, FormsModule, ToolbarModule, Button, InputIconModule, TabMenuModule]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', route: '/' },
    { label: 'Rules', icon: 'pi pi-map', route: '/rules' },
    { label: 'Play', icon: 'pi pi-desktop', route: '/game' },
  ];
  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
