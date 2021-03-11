import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable()

export class SplashScreenStateService {

   subject = new Subject();

   subscribe(onNext): Subscription {

      // tslint:disable-next-line: deprecation
      return this.subject.subscribe(onNext);
   }

   // tslint:disable-next-line: typedef
   stop() {
      this.subject.next(false);
   }
}
