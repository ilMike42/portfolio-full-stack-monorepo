import { Component, inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline.component';
import { scrollToElementWithOffset } from '@portfolio-full-stack-monorepo/internal-plugin'
import { TimelinePlaceholderComponent } from '../timeline/components/timeline-placeholder/timeline-placeholder.component';
import { LastfmCardComponent } from '@portfolio-full-stack-monorepo/shared-ui';
import { NgOptimizedImage } from '@angular/common'
import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'portfolio-full-stack-monorepo-home',
  standalone: true,
  imports: [RouterModule, TimelineComponent, TimelinePlaceholderComponent, LastfmCardComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  router = inject(Router);
  lastfmService = inject(LastfmService);



  public get scrollTo() {
    return scrollToElementWithOffset
  }


}
