import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  switchLang(lang: 'en' | 'ru'): void {
    this.translateService.use(lang);
  }

  ngOnInit(): void {
  
  }

 
}
