import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, SelectItem, Message } from 'primeng/api';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-create-global-registration',
  templateUrl: './create-global-registration.component.html',
  styleUrls: ['./create-global-registration.component.css']
})
export class CreateGlobalRegistrationComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  investmentType;
  location;
  eventType;
  effectiveDate;
  type;
  agreementType;
  dataJson;
  itemsPath: MenuItem[];
  flag;
  name;

  constructor(private mockService: MockDataService) {
    this.itemsPath = [
      { label: 'Create'},
      { label: 'Create Global Registration'}];
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
    if (!this.investmentType || !this.location || !this.eventType || !this.effectiveDate || !this.type || !this.agreementType) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'investmentType': this.investmentType,
        'type': this.type,
        'location': this.location,
        'eventType': this.eventType,
        'effectiveDate': this.effectiveDate,
        'agreementType': this.agreementType
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
    this.investmentType = '';
    this.location = '';
    this.eventType = '';
    this.effectiveDate = '';
    this.type = '';
    this.agreementType = '';
  }

  checkRadio(data) {
    console.log(data);
  }
}
