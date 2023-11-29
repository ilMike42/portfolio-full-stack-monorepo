import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaisyUITheme, DaisyUiThemeService } from '@portfolio-full-stack-monorepo/shared-ui';

@Component({
  selector: 'portfolio-full-stack-monorepo-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  themeService = inject(DaisyUiThemeService)

  updateTheme() {    
    if(this.themeService.theme() === DaisyUITheme.dark) {
      this.themeService.setTheme(DaisyUITheme.cupcake)
    } else {
      this.themeService.setTheme(DaisyUITheme.dark)
    }
  }
}
