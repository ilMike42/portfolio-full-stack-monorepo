import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'portfolio-full-stack-monorepo-lastfm-card',
  imports: [NgOptimizedImage],
  templateUrl: './lastfm-card.component.html',
  styleUrl: './lastfm-card.component.css',
})
export class LastfmCardComponent {
  title = input<string>();
  artist = input<string>();
  album = input<string>();
  trackCount = input<number>();
  albumArtUrl = input<string>();

  showCard = false;

  toggleCard() {
    this.showCard = !this.showCard;
  }
}
