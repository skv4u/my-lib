import { Component, OnInit,ViewChild, ElementRef,Input,forwardRef,EventEmitter,Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
  selector: 'skv-editor',
  templateUrl: './skv-editor.component.html',
  styleUrls: ['./skv-editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SkvEditorComponent),
      multi: true
    }
  ]
})
export class SkvEditorComponent implements ControlValueAccessor {
  @Input('data') data:string;
  @ViewChild('iframe') iframe: ElementRef;
  @Output() update = new EventEmitter;
  // value:string = ''
  private _onChange = (_: any) => {};
  private _onTouched = () => {};
   iframeDocRef:any;
  fontList:any[]=[];
  fontSizeList:string[]=[];
  isViewMode:boolean = false;
  isSourceVisible:boolean = false;
  constructor() {
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
  ngAfterViewInit() {
    // let content:string = ``;
    // doc.open();
    // doc.write(content);
    // doc.close();
    // console.log(this.data)
    this.iframeDocRef =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    this.iframeDocRef.designMode = "on";
    this.iframeDocRef.open();
    this.iframeDocRef.write(this.data);
    this.iframeDocRef.close();

    this.iframeDocRef.body.addEventListener('keyup',(e)=>{
      this.newEmit(e.target.innerHTML);
      // this._onChange(this.iframeDocRef.body.textContent);
      // this._onTouched(this.iframeDocRef.body.textContent);
    },true)
  }
 

  executeCommand(cmd:any){
    this.iframeDocRef.execCommand(cmd,false,null);
  }
  executeCommandWithOption(cmd1:string,cmd2:boolean,cmd3:any){
    let newCmd:any = cmd3;
    switch(cmd1){
      case 'insertorderedlist': newCmd = 'newOL' + Math.round(Math.random()*1000); break;
      case 'createlink': newCmd = prompt("Enter URL "); break;
    }
    this.iframeDocRef.execCommand(cmd1,cmd2,newCmd);
    
  }
  viewEditMode(){
    console.log(this.isViewMode);
    if(this.isViewMode){
    this.iframeDocRef.designMode = "on";
    this.isViewMode = false;
    
    }
    else{
      this.iframeDocRef.designMode = "off";
    this.isViewMode = true;
    
    }
  }
  sourceCode(){    
    if(this.isSourceVisible){
      this.iframeDocRef.body.innerHTML = this.iframeDocRef.body.textContent;      
      this.isSourceVisible = false;
    }else{
      this.iframeDocRef.body.textContent= this.iframeDocRef.body.innerHTML;      
      this.isSourceVisible = true;      
    }
    
  }
  insertImage(elem:any){
    if (elem.files && elem.files[0]) {
      var reader = new FileReader();
      reader.onload =  (e:any) => {
       console.log(e.target.result);
       this.iframeDocRef.execCommand('insertImage',false,e.target.result);
      };
      reader.readAsDataURL(elem.files[0]);
    }
  }
  newEmit(content:any){
    this.writeValue(content);
    this.registerOnChange(content);
    this.update.emit(content);
    
  }
  writeValue(obj: any): void {
    this.data = obj;
    // throw new Error("Method not implemented.");
  }


  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }
 
  registerOnChange( fn : any ) : void {
    this._onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this._onTouched = fn;
  } 
}
