import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DaisyUITheme, DaisyUiThemeService, ThemeSelectorComponent } from '@portfolio-full-stack-monorepo/shared-ui';

@Component({
  selector: 'portfolio-full-stack-monorepo-timeline',
  standalone: true,
  imports: [CommonModule, ThemeSelectorComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  
  
}
