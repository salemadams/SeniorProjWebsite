import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {CardInformation} from "../../models/CardInformation";
import {DividerModule} from "primeng/divider";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CopyClipboardService} from "../../services/copy-clipboard.service";
import {DialogModule} from "primeng/dialog";
import {DockModule} from "primeng/dock";
import {InputIconModule} from "primeng/inputicon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    DividerModule,
    OverlayPanelModule,
    DialogModule,
    DockModule,
    InputIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  visible: boolean = false;
  dialogText: string = '';

  constructor(private _copyClipboard: CopyClipboardService) {}

  protected cardInfo: CardInformation[] = [
    { name: 'Brandon Cantilang', role: 'Team Lead/Documentation', phoneNumber: '(678)-230-7931', email: 'brandoncantilang@gmail.com', imageUrl: 'assets/BrandonPhoto.png' },
    { name: 'Salem Adams', role: 'Developer', phoneNumber: '(470)-330-1041', email: 'salemadamscs@gmail.com', imageUrl: 'assets/SalemPhoto.png' },
    { name: 'Nick Rath', role: 'Developer', phoneNumber: '(404)-441-9239', email: 'nicholasrath@protonmail.com', imageUrl: 'assets/NickPhoto.png'},
    { name: 'Michael Barber', role: 'Documentation', phoneNumber: '(770)-548-6750', email: 'barbermichael51@gmail.com', imageUrl: 'assets/MichaelPhoto.png'},
  ]

  copy(text: string, dialogText: string) {
    this._copyClipboard.copyText(text);
    this.visible = true;
    this.dialogText = dialogText;
    setTimeout(() => {
      this.visible = false;
    }, 1250);
  }
}
