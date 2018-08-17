import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MockDataService } from "../services/mock-data.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  intermediary;
  location;
  name;
  intermediaryId;
  type;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
    this.itemsPath = [
      { label: 'Create' }];
  }

  ngOnInit() {
    this.preloadData();
  }

  preloadData() {
    this.mockService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
    this.mockService.getMultiDropdownData().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }

  disable() {
    if (!this.intermediary || !this.location || !this.name || !this.intermediaryId || !this.type) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'intermediary': this.intermediary,
        'location': this.location,
        'name': this.name,
        'intermediaryId': this.intermediaryId,
        'type': this.type
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
    this.intermediary = '';
    this.location = '';
    this.name = '';
    this.intermediaryId = '';
    this.type = '';
  }

  checkRadio(data) {
    console.log(data);
  }

}
