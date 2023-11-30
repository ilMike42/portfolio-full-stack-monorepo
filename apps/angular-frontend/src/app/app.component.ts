import { DOCUMENT } from '@angular/common';
import { Component, Inject, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DaisyUiThemeService, FooterComponent, HeaderComponent } from '@portfolio-full-stack-monorepo/shared-ui';
import { environment } from '../environments/environment';

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

  /**
   * 
   * @param doc 
   * The constructor of this app.component sets the data-theme attribute
   * on the <html> tag, this handles the daisyUI theme using the DaisyUI service.s
   */
  public constructor(@Inject(DOCUMENT) doc: Document) {
    effect(() => {
      doc.documentElement.setAttribute('data-theme', this.themeService.theme());
    })

    console.log(environment.BASE_URL);
    
  }

}
