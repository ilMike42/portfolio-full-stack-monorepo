import { Component, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DaisyUITheme, DaisyUiThemeService } from '../../services/daisy-ui-theme/daisy-ui-theme.service';

@Component({
  selector: 'portfolio-full-stack-monorepo-theme-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css'],
})
export class ThemeSelectorComponent implements OnInit {
  fb = inject(FormBuilder);
  themeService = inject(DaisyUiThemeService);

  themeSelector: FormControl<DaisyUITheme> = this.fb.nonNullable.control<DaisyUITheme>(this.themeService.theme());

  constructor() {
    effect(() => {
      const value = this.themeService.theme();
      this.themeSelector.setValue(value, { emitEvent: false });
    })
  }

  get DaisyUITheme() {
    return DaisyUITheme;
  }

  ngOnInit(): void {
    this.themeSelector.valueChanges.subscribe(value => {
      this.themeService.setTheme(value);
    });
  }
}

