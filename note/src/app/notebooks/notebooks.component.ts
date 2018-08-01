import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {
  //@ViewChild('txtNoteName') txtNoteName: any;
  isAddNew = false;
  selectedNotebook: any;
  notebookList: any[];

  constructor() {
    this.notebookList = [
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

  addEditNotebook() {
    this.isAddNew = !this.isAddNew;
    if (this.isAddNew) {
      //debugger
      //this.txtNoteName.nativeElement.focus();
    }
  }

  modifyNotebook(note: any) {
    this.addEditNotebook();
    this.selectedNotebook = note;
  }

  addNotebook() {
    this.addEditNotebook();
    this.selectedNotebook = { id: 0, name: '' };
  }

  saveNotebook(notebook: any, notebookName: any) {
    debugger
    if (notebook.id == 0) {
      notebook.id = this.notebookList.length;
      notebook.name = notebookName;
      this.notebookList.push(notebook);
    } else {
      for (let i = 0; i < this.notebookList.length; i++) {
        if (this.notebookList[i].id == notebook.id) {
          this.notebookList[i].name = notebookName;
        }
      }
    }
    this.addEditNotebook();
  }
}
