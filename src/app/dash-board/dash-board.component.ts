import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  opened:boolean=true;
  showFiller = false;
 
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
