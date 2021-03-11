/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SplashScreenStateService } from './splash-screen-state.service';

describe('Service: SplashScreenState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplashScreenStateService]
    });
  });

  it('should ...', inject([SplashScreenStateService], (service: SplashScreenStateService) => {
    expect(service).toBeTruthy();
  }));
});
