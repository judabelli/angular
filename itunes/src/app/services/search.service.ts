import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ItunesSearchService{

  constructor(public jsonp:Jsonp ){}

  getResults(searchTerm){
    // Construct the itunes search url with callback
    let url = "https://itunes.apple.com/search?term=" + searchTerm + "&entity=song";
    return this.jsonp.request(url).map(res => {
      return res.json();
    }).toPromise();
  }

  // log error to console
  logError(error){
    console.log("Something went wrong" + error);
  }
}
