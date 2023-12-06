import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline.component';
import { scrollToElementWithOffset } from '@portfolio-full-stack-monorepo/internal-plugin'

@Component({
  selector: 'portfolio-full-stack-monorepo-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TimelineComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  router = inject(Router);

  
  public get scrollTo() {
    return scrollToElementWithOffset
  }
  

}