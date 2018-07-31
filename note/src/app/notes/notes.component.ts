import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  isAddNew = false;
  selectedNote: any;
  noteList: any[];

  constructor() {
    this.noteList = [
      {
        name: "A"
      },
      {
        name: "B"
      },
      {
        name: "C"
      },
      // {
      //   name: "A"
      // },
      // {
      //   name: "B"
      // },
      // {
      //   name: "C"
      // },
      // {
      //   name: "A"
      // },
      // {
      //   name: "B"
      // },
      // {
      //   name: "C"
      // },
      // {
      //   name: "A"
      // },
      // {
      //   name: "B"
      // },
      // {
      //   name: "C"
      // },
      // {
      //   name: "A"
      // },
      // {
      //   name: "B"
      // },
      // {
      //   name: "C"
      // },
      // {
      //   name: "A"
      // },
      // {
      //   name: "B"
      // },
      // {
      //   name: "C"
      // },
      // {
      //   name: "A"
      // },
      // {
      //   name: "B"
      // },
      // {
      //   name: "C"
      // },
      // {
      //   name: "A"
      // },
      // {
      //   name: "B"
      // },
      // {
      //   name: "C"
      // }
    ];
  }

  ngOnInit() {
  }

  addEditNote() {
    this.isAddNew = !this.isAddNew;
  }

  modifyNote(note: any) {
    this.addEditNote();
    this.selectedNote = note;
  }

  addNote() {
    this.addEditNote();
    this.selectedNote = null;
  }
}
