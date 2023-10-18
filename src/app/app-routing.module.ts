import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';

const routes: Routes = [
  // {path: '', redirectTo: 'ck-editor', pathMatch: 'full'},
  // {path: 'ck-editor', component: CKEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
