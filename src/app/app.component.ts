import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  result: string = `<div>555 jj.</div>`;
  options:any = {
    "background-color": "#415b8a",
    "color": "#ffffff",
    "border": "2px solid #415b8a"
  }
  constructor() {
    // this.editorContent = "eee"
  }

  update(elem) {
    console.log(elem);
    this.result = elem;
  }
  view:boolean = false;
  show(){
    this.view = true;
  }
}
