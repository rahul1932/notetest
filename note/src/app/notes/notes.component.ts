import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  //@ViewChild('txtNoteName') txtNoteName: any;
  isAddNew = false;
  selectedNote: any;
  sortNote: any;
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

  ngOnInit() { }

  addEditNote() {
    this.isAddNew = !this.isAddNew;
    if (this.isAddNew) {
      //debugger
      //this.txtNoteName.nativeElement.focus();
    }
  }

  modifyNote(note: any) {
    this.addEditNote();
    this.selectedNote = note;
  }

  addNote() {
    this.addEditNote();
    this.selectedNote = { id: 0, name: '' };
  }

  saveNote(note: any, noteName: any) {
    if (note.id == 0) {
      note.id = this.noteList.length;
      note.name = noteName;
      this.noteList.push(note);
    } else {
      for (let i = 0; i < this.noteList.length; i++) {
        if (this.noteList[i].id == note.id) {
          this.noteList[i].name = noteName;
        }
      }
    }
    this.addEditNote();
  }

  deleteNote(note: any) {
    debugger
    for (let i = 0; i < this.noteList.length; i++) {
      if (this.noteList[i].id == note.id) {
        this.noteList.splice(i,1);
      }
    }
  }
}
