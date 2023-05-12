import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.page.html',
  styleUrls: ['./player-stats.page.scss'],
})
export class PlayerStatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Opens a browser window to the designated url
  async openBrowser() {
    await Browser.open({ url: 'https://www.premierleague.com/stats' });
  };

}
