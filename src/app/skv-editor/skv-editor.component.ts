import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output, Renderer2 } from '@angular/core';



@Component({
  selector: 'skv-editor',
  templateUrl: './skv-editor.component.html',
  styleUrls: ['./skv-editor.component.css']
})
export class SkvEditorComponent implements OnInit {
  @Input('data') data: string;
  @Input('options') options?: any;

  @ViewChild('iframe') iframe: ElementRef;
  @Output() onUpdate = new EventEmitter;
  globalListenFunc: Function;

  iframeDocRef: any;
  fontList: any[] = [];
  fontSizeList: string[] = [];
  isViewMode: boolean = false;
  isSourceVisible: boolean = false;

  constructor(private renderer: Renderer2) {
    this.fontList = [
      { "key": "Times New Roman", "name": "Times New Roman" },
      { "key": "consolas", "name": "Consolas" },
      { "key": "tahoma", "name": "Tahoma" },
      { "key": "monospace", "name": "Monospace" },
      { "key": "cursive", "name": "Cursive" },
      { "key": "sans-serif", "name": "Sans-serif" },
      { "key": "calibri", "name": "Calibri" },
    ]
    for (let i = 1; i <= 7; i++) {
      this.fontSizeList.push(i + "");
    }
  }
  ngOnInit() {

    console.log(this.options);
    if (!this.options) {
      this.options = {
        "background-color": "#fd903f",
        "color": "#ffffff",
        "border": "2px solid #fd903f"
      }
    }
    this.iframeDocRef = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    this.iframeDocRef.designMode = "on";
    this.iframeDocRef.open();
    this.iframeDocRef.write(this.data);
    this.iframeDocRef.close();

    this.globalListenFunc = this.renderer.listen(this.iframeDocRef.body, 'input', e => {
      this.newEmit(e.target.innerHTML);
    });
  }

  executeCommand(cmd: any) {
    this.iframeDocRef.execCommand(cmd, false, null);
  }
  executeCommandWithOption(cmd1: string, cmd2: boolean, cmd3: any) {
    let newCmd: any = cmd3;
    switch (cmd1) {
      case 'insertorderedlist': newCmd = 'newOL' + Math.round(Math.random() * 1000); break;
      case 'createlink': newCmd = prompt("Enter URL "); break;
    }
    this.iframeDocRef.execCommand(cmd1, cmd2, newCmd);

  }
  viewEditMode() {
    console.log(this.isViewMode);
    if (this.isViewMode) {
      this.iframeDocRef.designMode = "on";
      this.isViewMode = false;

    }
    else {
      this.iframeDocRef.designMode = "off";
      this.isViewMode = true;

    }
  }
  sourceCode() {
    if (this.isSourceVisible) {
      this.iframeDocRef.body.innerHTML = this.iframeDocRef.body.textContent;
      this.isSourceVisible = false;
      this.iframeDocRef.designMode = "on";
      
    } else {
      this.iframeDocRef.body.textContent = this.iframeDocRef.body.innerHTML;
      this.isSourceVisible = true;      
      this.iframeDocRef.designMode = "off";
    }

  }
  insertImage(elem: any) {
    if (this.isSourceVisible) return;
    if (elem.files && elem.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.iframeDocRef.execCommand('insertImage', false, e.target.result);
      };
      reader.readAsDataURL(elem.files[0]);
    }
  }
  newEmit(content: any) {
    this.onUpdate.emit(content);

  }

}
