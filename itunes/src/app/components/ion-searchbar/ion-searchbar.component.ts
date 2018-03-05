import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { ItunesSearchService } from '../../services/search.service';
import {TruncateString} from '../../services/search.pipe';

@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.css'],
})

export class IonSearchbarComponent {
  items: Array<Object>;
  message: String;

  constructor(private itunesService: ItunesSearchService){
  }
  // Initiate search based on input value
  initSearch(value){
    this.itunesService.getResults(value).then(result => {
      // Clear previous items
      this.items = null;
      this.message = null;
      if(result.results.length > 0){
        this.items = result.results;
      } else{
        this.message = "No results for \"" + value + "\"";
      }

    });
  }
}
