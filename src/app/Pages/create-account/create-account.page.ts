import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  name:string = "";
  nationality:string = "";
  team:string = "";
  items = [];

  constructor(private str:Storage) { }

  ngOnInit() {
  }

  async onSave() {
    await this.str.create();
    await this.str.set("Name", this.name);
    await this.str.set("Nationality", this.nationality);
    await this.str.set("Team", this.team);

    
    
  }

}
