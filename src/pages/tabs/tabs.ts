import { Component } from '@angular/core';

import { CalendarPage } from '../calendar/calendar';
import { StorePage } from '../store/store';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CalendarPage;
  tab2Root: any = StorePage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
