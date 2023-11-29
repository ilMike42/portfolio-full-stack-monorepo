import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DaisyUiThemeService, FooterComponent, HeaderComponent } from '@portfolio-full-stack-monorepo/shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'portfolio-full-stack-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-frontend';
  
  themeService = inject(DaisyUiThemeService)

  public constructor(@Inject(DOCUMENT) doc: Document) {
    // todo: document this
    effect(() => {
      doc.documentElement.setAttribute('data-theme', this.themeService.theme());
    })
  }

}
