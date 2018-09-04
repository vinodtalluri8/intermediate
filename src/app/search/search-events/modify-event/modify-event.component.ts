import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem, Message } from 'primeng/api';
import { MockDataService } from "../../../services/mock-data.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css']
})
export class ModifyEventComponent implements OnInit {

  sales;
  isPaginator;
  filterable;
  exportFileName;
  selectedRows;
  loading;
  displayRows;
  colHeaders;
  itemsPath: MenuItem[];
  home: MenuItem;
  mockDropDownData;
  mockMultiDropDownData;
  selectedProgram;
  intermediary;
  intermediaryId;
  investmentType;
  location;
  eventType;
  currentDocument;
  newDocument;
  agreement;
  agreementType;
  effectiveDate;
  eventStatus;
  active;
  dataJson;
  flag;

  constructor(private mockService: MockDataService, private router: Router) {
    this.isPaginator = true;
    this.filterable = true;
    this.exportFileName = 'Checklists Scheduled';
    this.selectedRows = 15;
    this.loading = false;
    this.home = { icon: 'fa fa-home' };

    //  this.itemsPath = [
    //   { label: 'Modify Event' },
    // ];

    this.itemsPath = [
      { label: 'Search' },
      { label: 'Search Events' },
      { label: 'Search Events List' },
      { label: 'Modify Event' }
    ];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

    this.colHeaders = [
      { field: 'activity', header: 'Activity' },
      { field: 'document', header: 'Document' },
      { field: 'date', header: 'Date' },
      { field: 'status', header: 'Status' },
      { field: 'notes', header: 'Notes' }
    ];
  }

  ngOnInit() {
    this.flag = true;
    this.sales = [
      { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
      { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
      { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
      { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' }
    ];

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
    if (!this.intermediary || !this.intermediaryId || !this.investmentType || !this.location || !this.eventType || !this.currentDocument || !this.newDocument || !this.agreement || !this.agreementType || !this.effectiveDate || !this.eventStatus || !this.active) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    this.flag = false;
    if (!this.disable()) {
      this.dataJson = {
        'intermediary': this.intermediary,
        'intermediaryId': this.intermediaryId,
        'investmentType': this.investmentType,
        'location': this.location,
        'eventType': this.eventType,
        'currentDocument': this.currentDocument,
        'newDocument': this.newDocument,
        'agreement': this.agreement,
        'agreementType': this.agreementType,
        'effectiveDate': this.effectiveDate,
        'eventStatus': this.eventStatus,
        'active': this.active
      };
    }
    
    console.log('dataJson', this.dataJson);
  }

  resetAll() {
    this.intermediary = '';
    this.intermediaryId = '';
    this.investmentType = '';
    this.location = '';
    this.eventType = '';
    this.currentDocument = '';
    this.newDocument = '';
    this.agreement = '';
    this.agreementType = '';
    this.effectiveDate = new Date();
    this.eventStatus = '';
    this.active = '';
  }

  openModifyActivity() {
    this.router.navigate(['modifyactivity']);
  }
}
