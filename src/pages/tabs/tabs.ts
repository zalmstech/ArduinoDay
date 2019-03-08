import { Component } from '@angular/core';

import { MessagesPage } from '../messages/messages';
import { MetersPage } from '../meters/meters';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagesPage;
  tab2Root = MetersPage;

  constructor() {

  }
}
