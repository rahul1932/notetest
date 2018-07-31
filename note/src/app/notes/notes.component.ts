import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  //@ViewChild('test') test: any;
  isAddNew = false;
  selectedNote: any;
  noteList: any[];

  constructor() {
    this.noteList = [
      {
        id: 1,
        name: "A"
      },
      {
        id: 2,
        name: "B"
      },
      {
        id: 3,
        name: "C"
      },
    ];
  }

  ngOnInit() {
  }

  addEditNote() {
    this.isAddNew = !this.isAddNew;
    if (this.isAddNew) {
      //debugger
      //this.test.nativeElement.focus();
    }
  }

  modifyNote(note: any) {
    this.addEditNote();
    this.selectedNote = note;
  }

  addNote() {
    this.addEditNote();
    this.selectedNote = {id:0,name:''};
  }

  saveNote(note: any) {
    debugger
    if (note.id == 0) {
      note.id = this.noteList.length;
      this.noteList.push(note);
    }
    this.addEditNote();
  }
}
