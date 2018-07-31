import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NotebooksComponent } from './notebooks/notebooks.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'notebooks',
    component: NotebooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }