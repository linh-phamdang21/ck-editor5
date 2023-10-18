import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-ckeditor';
  public Editor = ClassicEditor;

  constructor() {

  }

  ngOnInit(): void {
    console.log('editor: ', this.Editor);

  }

  // public onReady( editor: DecoupledEditor ): void {
  //   const element = editor.ui.getEditableElement()!;
  //   const parent = element.parentElement!;

  //   parent.insertBefore(
  //     editor.ui.view.toolbar.element!,
  //     element
  //   );
  // }
}
