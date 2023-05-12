import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EplService } from 'src/app/Services/epl.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage  {
  table:any[]=[];
  constructor(private ms: EplService) {}

  ngOnInit(): void {
    this.ms.LeagueTable().subscribe(
      (data)=>{
        this.table = data.Search;
      }
    );
  }
  

}
