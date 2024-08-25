import {Component} from "@angular/core";
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {NgIf} from "@angular/common";

@Component({
  selector: "navbar",
  templateUrl: "navbar.component.html",
  imports: [
    MenubarModule,
    NgIf
  ],
  standalone: true
})
export class NavbarComponent {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi-home', link: '/' },
    { label: 'Project', icon: 'pi-download', link: '/project' },
    { label: 'Contact', icon: 'pi-user', link: '/contact' },
  ]
}
