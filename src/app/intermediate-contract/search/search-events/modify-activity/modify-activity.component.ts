import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem, Message } from 'primeng/api';

@Component({
  selector: 'app-modify-activity',
  templateUrl: './modify-activity.component.html',
  styleUrls: ['./modify-activity.component.css']
})
export class ModifyActivityComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;
  activity;
  notes;
  currentDocument;
  newDocument;
  startdate;
  dataJson;

  constructor() {
    this.itemsPath = [
      { label: 'Search' },
      { label: 'Search Events' },
      { label: 'Search Events List' },
      { label: 'Modify Activity' }
    ];
  }

  ngOnInit() {
  }

  disable() {
    if (!this.activity || !this.notes || !this.currentDocument || !this.newDocument || !this.startdate) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'activity': this.activity,
        'notes': this.notes,
        'currentDocument': this.currentDocument,
        'newDocument': this.newDocument,
        'startdate': this.startdate
      };
    }
    console.log('dataJson', this.dataJson);
  }

  resetAll() {
    this.activity = '';
    this.notes = '';
    this.currentDocument = '';
    this.newDocument = '';
    this.startdate = new Date();
  }

}
