import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineService } from './services/timeline.service';
import { TimelinePlaceholderComponent } from './components/timeline-placeholder/timeline-placeholder.component';

@Component({
  selector: 'portfolio-full-stack-monorepo-timeline',
  standalone: true,
  imports: [CommonModule, TimelinePlaceholderComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  timelineService = inject(TimelineService)
}
