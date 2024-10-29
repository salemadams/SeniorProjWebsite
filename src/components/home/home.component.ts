import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {CardInformation} from "../../models/CardInformation";
import {DividerModule} from "primeng/divider";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CopyClipboardService} from "../../services/copy-clipboard.service";
import {DialogModule} from "primeng/dialog";
import {DockModule} from "primeng/dock";

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  visible: boolean = false;
  dialogText: string = '';

  constructor(private _copyClipboard: CopyClipboardService) {}

  protected cardInfo: CardInformation[] = [
    { name: 'Salem Adams', role: 'Developer', description: 'Placeholder', phoneNumber: '470-330-1041', email: 'salemadamscs@gmail.com' },
    { name: 'Brandon Cantilang', role: 'Developer', description: 'Placeholder', phoneNumber: '', email: '' },
    { name: 'Nick Rath', role: 'Developer', description: 'Placeholder', phoneNumber: '', email: ''},
    { name: 'Michael Barber', role: 'Developer', description: 'Placeholder', phoneNumber: '', email: ''},
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
