import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../services/landng-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  // Language variables
  currentLanguage: string = 'Eng';
  showLanguageOptions: boolean = false;

  // Header images
  headerImages!: { imageSrc: string }[];
  activeHeaderImageIndex: number = 0;

  constructor(private landingPageService: LandingPageService) {}

  ngOnInit(): void {
    this.headerImages = this.landingPageService.headerImages;
  }

  // Change Language of the page
  changeCurrentLanguage(language: string) {
    this.currentLanguage = language;
    this.showLanguageOptions = false;
  }

  // Slide through images in header
  slideHeaderImages(direction: string) {
    if (direction === 'forward') {
      if (this.activeHeaderImageIndex < this.headerImages.length - 1) {
        this.activeHeaderImageIndex++;
      } else {
        this.activeHeaderImageIndex = 0;
      }
    } else {
      if (this.activeHeaderImageIndex > 0) {
        this.activeHeaderImageIndex--;
      } else {
        this.activeHeaderImageIndex = this.headerImages.length - 1;
      }
    }
  }
}
