import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../../services/mock-data.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-list-event',
  templateUrl: './create-list-event.component.html',
  styleUrls: ['./create-list-event.component.css']
})
export class CreateListEventComponent implements OnInit {
  mockDropDownData;
  mockMultiDropDownData;
  intermediary;
  location;
  intermediaryId;
  agreementType;
  document;
  effectiveDate;
  investmentType;
  eventType;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
    this.itemsPath = [
      { label: 'Create'},
      { label: 'Create Event'}];
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
    if (!this.intermediary || !this.location || !this.agreementType || !this.intermediaryId || !this.document || !this.effectiveDate || !this.eventType || !this.investmentType) {
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
        'intermediaryId': this.intermediaryId,
        'agreementType': this.agreementType,
        'document': this.document,
        'effectiveDate': this.effectiveDate,
        'eventType': this.eventType,
        'investmentType': this.investmentType
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
    this.intermediary = '';
    this.location = '';
    this.intermediaryId = '';
    this.agreementType = '';
     this.document = '';
    this.effectiveDate = new Date();
    this.eventType = '';
    this.investmentType = '';
  }
}
