import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { CreatePage } from '../create/create';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SavePage } from '../save/save';
/*import { AboutPage } from '../about/about';*/
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CreatePage;
  tab4Root = SavePage;
  tab5Root = ContactPage;
/*tab2Root = AboutPage;*/
  constructor() {

  }
}
