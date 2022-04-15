import { Component, OnInit } from '@angular/core';
import { Date } from 'src/app/classes/date';
import { Report } from 'src/app/classes/report';

@Component({
  selector: 'app-list-report-page',
  templateUrl: './list-report-page.component.html',
  styleUrls: ['./list-report-page.component.scss']
})
export class ListReportPageComponent implements OnInit {

  reportsMenu : Report[] = [
    new Report("PRO-08235 DeskOpe. Website",new Date("2 PM",9,"apr",2022),25.2,10.2, "Online", 1),
    new Report("PRO-08235 DeskOpe. Website",new Date("2 PM",9,"apr",2022),25.2,10.2, "Online", 1),
    new Report("PRO-08235 DeskOpe. Website",new Date("2 PM",9,"apr",2022),25.2,10.2, "Online", 1)
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.reportsMenu)
  }

}
