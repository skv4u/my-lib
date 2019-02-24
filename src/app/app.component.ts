import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  result:string = `<div>Proin efficitur tellus blandit, dictum ante ut, posuere ligula. Duis suscipit ante efficitur risus tincidunt cursus.</div> 
  <div><br></div><div>Aliquam in dui vel erat euismod volutpat. Morbi pulvinar, tortor at aliquam viverra, odio neque molestie urna, sed tempus nibh ligula vel ligula. Sed aliquet mi a tortor rutrum fermentum. Suspendisse ut velit diam. Maecenas ligula enim, rhoncus mattis lorem ut, tincidunt varius tortor.&nbsp;</div><div><br></div><div>Cras ex nunc, vestibulum ut augue et, tincidunt fringilla dolor. Nam laoreet turpis in arcu commodo ultrices. Cras eget sapien ac velit accumsan tempor ut maximus mauris. Nunc sem odio, pellentesque sit amet magna sed, gravida consectetur massa. Etiam sodales convallis purus eget condimentum. Mauris ultricies purus vel ultricies tempus.</div>`;

  constructor(){
    // this.editorContent = "eee"
  }

  newData(elem){
    console.log(elem);
this.result = elem;
  }
}
