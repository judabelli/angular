import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconRegistry, MatIconModule } from '@angular/material';

import { Jsonp } from '@angular/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { IonSearchbarComponent } from './components/ion-searchbar/ion-searchbar.component';

import { ItunesSearchService } from './services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    IonSearchbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    HttpModule
  ],
  providers: [
    ItunesSearchService,
    Jsonp
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
