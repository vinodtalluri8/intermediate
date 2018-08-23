import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, SelectItem, Message } from 'primeng/api';
import { MockDataService } from "../../services/mock-data.service";


@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {

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
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService, private router: Router) {
    this.itemsPath = [
      { label: 'Search'},
      { label: 'Search Events'}];
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
    if (!this.investmentType || !this.intermediateType || !this.location || !this.name || !this.status || !this.id || !this.agreementType || !this.agreement || !this.event || !this.startDate || !this.eventStatus || !this.endDate || !this.active) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
          'investmentType' : this.investmentType,
          'intermediateType' : this.intermediateType,
          'location' : this.location,
          'name' : this.name,
          'status' : this.status,
          'id' : this.id,
          'agreementType' : this.agreementType,
          'agreement' : this.agreement,
          'event' : this.event,
          'startDate' : this.startDate,
          'eventStatus' : this.eventStatus,
          'endDate' : this.endDate,
          'active' : this.active
      };
    }
    this.router.navigate(['searcheventslist']);
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
  }

  // openSearchEventsList(){
  //   this.router.navigate(['searcheventslist']);
  // }
}
