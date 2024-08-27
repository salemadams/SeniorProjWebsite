import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {CardInformation} from "../../models/CardInformation";
import {DividerModule} from "primeng/divider";
import {OverlayPanelModule} from "primeng/overlaypanel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    DividerModule,
    OverlayPanelModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected cardInfo: CardInformation[] = [
    { name: 'Salem Adams', role: 'Developer', description: 'Placeholder', phoneNumber: '470-330-1041', email: 'salemadamscs@gmail.com' },
    { name: 'Brandon Cantilang', role: 'Developer', description: 'Placeholder', phoneNumber: '', email: '' },
    { name: 'Nick Rath', role: 'Developer', description: 'Placeholder', phoneNumber: '', email: ''},
    { name: 'Michael Barber', role: 'Developer', description: 'Placeholder', phoneNumber: '', email: ''},
  ]
}
