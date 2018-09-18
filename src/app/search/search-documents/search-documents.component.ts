import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, SelectItem, Message } from 'primeng/api';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.css']
})
export class SearchDocumentsComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  investmentType;
  intermediateType;
  location;
  name;
  status;
  id;
  agreementType;
  agreement;
  event;
  startDate;
  eventStatus;
  endDate;
  active;
  fileName;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService, private router: Router) {
    this.itemsPath = [
      { label: 'Search' },
      { label: 'Search Documents' }];
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
    if (!this.investmentType || !this.intermediateType || !this.location || !this.name || !this.status || !this.id || !this.agreementType || !this.agreement || !this.event || !this.startDate || !this.eventStatus || !this.endDate || !this.active || !this.fileName) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'investmentType': this.investmentType,
        'intermediateType': this.intermediateType,
        'location': this.location,
        'name': this.name,
        'status': this.status,
        'id': this.id,
        'agreementType': this.agreementType,
        'agreement': this.agreement,
        'event': this.event,
        'startDate': this.startDate,
        'eventStatus': this.eventStatus,
        'endDate': this.endDate,
        'active': this.active,
        'fileName': this.fileName
      };
    }
    this.router.navigate(['searchdocumentslist']);
    console.log('dataJson', this.dataJson);
  }

  resetAll() {
    this.investmentType = '';
    this.intermediateType = '';
    this.location = '';
    this.name = '';
    this.status = '';
    this.id = '';
    this.agreementType = '';
    this.agreement = '';
    this.event = '';
    this.startDate = '';
    this.eventStatus = '';
    this.endDate = '';
    this.active = '';
    this.fileName = '';
  }

  checkRadio(data) {
    console.log(data);
  }
}
