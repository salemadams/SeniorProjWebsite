import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CopyClipboardService {
  copyText(copyText: string) {
    const text = copyText;
    const selBox = document.createElement('textarea');
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
