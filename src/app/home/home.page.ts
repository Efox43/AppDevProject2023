import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor(private str:Storage) {}

  savedName:string="";
  savedNationality:string="";
  savedTeam:string="";

  async ionViewWillEnter() {

    
    this.savedName = await this.str.get("Name");
    this.savedNationality = await this.str.get("Nationality");
    this.savedTeam = await this.str.get("Team");
  }
  
}
