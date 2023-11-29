import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from '@portfolio-full-stack-monorepo/shared-ui';

@Component({
  selector: 'portfolio-full-stack-monorepo-timeline',
  standalone: true,
  imports: [CommonModule, ThemeSelectorComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  
  
}
