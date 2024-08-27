import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {RippleModule} from 'primeng/ripple';
import {InputSwitchModule} from "primeng/inputswitch";
import {ThemeService} from "../../services/theme.service";
import {FormsModule} from "@angular/forms";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {InputIconModule} from "primeng/inputicon";

@Component({
    selector: "navbar",
    templateUrl: "navbar.component.html",
    standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, InputSwitchModule, FormsModule, ToolbarModule, Button, InputIconModule]
})
export class NavbarComponent implements OnInit {
    checked: boolean = true;
    selectedTheme: string = 'dark';

    constructor(private _themeService: ThemeService) {
    }

    ngOnInit() {
      this._themeService.switchTheme(this.selectedTheme);
    }

  onThemeChange(theme: string) {
      this.selectedTheme = theme;
      this._themeService.switchTheme(theme)
  }
}
