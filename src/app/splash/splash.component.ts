import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../splash-screen-state.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  // The screen starts with the maximum opacity
public opacityChange = 1;
public splashTransition;
// First access the splash is visible
public showSplash = true;
readonly ANIMATION_DURATION = 1;

  constructor(private splashScreenStateService: SplashScreenStateService) { }

  // tslint:disable-next-line: typedef
  private hideSplashAnimation() {
    // Setting the transition
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    setTimeout(() => {
       // After the transition is ended the showSplash will be hided
       this.showSplash = !this.showSplash;
    }, 1000);
 }

  ngOnInit(): void {
     // Somewhere the stop method has been invoked
 //   this.splashScreenStateService.subscribe(res => {
 //    this.hideSplashAnimation();
 // });
  }

}
