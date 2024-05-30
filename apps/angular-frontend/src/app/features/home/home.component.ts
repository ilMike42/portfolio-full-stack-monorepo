import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline.component';
import { scrollToElementWithOffset } from '@portfolio-full-stack-monorepo/internal-plugin'
import { TimelinePlaceholderComponent } from '../timeline/components/timeline-placeholder/timeline-placeholder.component';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'portfolio-full-stack-monorepo-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TimelineComponent, TimelinePlaceholderComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  router = inject(Router);


  public get scrollTo() {
    return scrollToElementWithOffset
  }


}
