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

@Component({
    selector: "navbar",
    templateUrl: "navbar.component.html",
    standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, InputSwitchModule, FormsModule, ToolbarModule, Button, InputIconModule]
})
export class NavbarComponent {
}
