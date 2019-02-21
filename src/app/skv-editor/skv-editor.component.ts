import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'skv-editor',
  templateUrl: './skv-editor.component.html',
  styleUrls: ['./skv-editor.component.css']
})
export class SkvEditorComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;
  iframeDocRef:any;
  fontList:any[]=[];
  fontSizeList:string[]=[];
  constructor() { }
  ngAfterViewInit() {
    let content:string = `<div>Proin efficitur tellus blandit, dictum ante ut, posuere ligula. Duis suscipit ante efficitur risus tincidunt cursus.</div> 
    <div><br></div><div>Aliquam in dui vel erat euismod volutpat. Morbi pulvinar, tortor at aliquam viverra, odio neque molestie urna, sed tempus nibh ligula vel ligula. Sed aliquet mi a tortor rutrum fermentum. Suspendisse ut velit diam. Maecenas ligula enim, rhoncus mattis lorem ut, tincidunt varius tortor.&nbsp;</div><div><br></div><div>Cras ex nunc, vestibulum ut augue et, tincidunt fringilla dolor. Nam laoreet turpis in arcu commodo ultrices. Cras eget sapien ac velit accumsan tempor ut maximus mauris. Nunc sem odio, pellentesque sit amet magna sed, gravida consectetur massa. Etiam sodales convallis purus eget condimentum. Mauris ultricies purus vel ultricies tempus.</div>`;
    // doc.open();
    // doc.write(content);
    // doc.close();
    this.iframeDocRef =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    this.iframeDocRef.designMode = "on";
    this.iframeDocRef.open();
    this.iframeDocRef.write(content);
    this.iframeDocRef.close();
  }
  ngOnInit() {   
    this.fontList = [
      {"key":"Times New Roman","name":"Times New Roman"},
      {"key":"consolas","name":"Consolas"},
      {"key":"tahoma","name":"Tahoma"},
      {"key":"monospace","name":"Monospace"},
      {"key":"cursive","name":"Cursive"},
      {"key":"sans-serif","name":"Sans-serif"},
      {"key":"calibri","name":"Calibri"},
    ]
    for(let i=1; i<=7; i++){
      this.fontSizeList.push(i + "");
    }
  }

  executeCommand(cmd:any){
    this.iframeDocRef.execCommand(cmd,false,null);
  }
  executeCommandWithOption(cmd1:string,cmd2:boolean,cmd3:any){
    let newCmd:any = cmd3;
    switch(cmd1){
      case 'insertorderedlist': newCmd = 'newOL' + Math.round(Math.random()*1000); break;
      case 'createlink': newCmd = "https://google.come"; break;
    }
    this.iframeDocRef.execCommand(cmd1,cmd2,newCmd);
    
  }
}
