import { TestBed, inject } from '@angular/core/testing';

import { ItunesSearchService } from './search.service';

describe('ItunesSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesSearchService]
    });
  });

  it('should be created', inject([ItunesSearchService], (service: ItunesSearchService) => {
    expect(service).toBeTruthy();
  }));
});
