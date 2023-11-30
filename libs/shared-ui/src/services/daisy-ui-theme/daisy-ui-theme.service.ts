import { Injectable, WritableSignal, computed, signal } from '@angular/core';

export enum DaisyUITheme {
  dark = 'dark',
  cupcake = 'cupcake',
  cyberpunk = 'cyberpunk'
}

export interface DaisyUiThemeState {
  theme: DaisyUITheme
}

@Injectable({
  providedIn: 'root'
})
export class DaisyUiThemeService {
  #state: WritableSignal<DaisyUiThemeState>;

  theme = computed(() => this.#state().theme)

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const themeToApply = this.#getThemeFrom(savedTheme);

    this.#state = signal<DaisyUiThemeState>({
      theme: themeToApply
    });
  }

  setTheme(theme: DaisyUITheme) {
    localStorage.setItem('theme', theme);
    this.#state.update(state => ({...state, theme}));
  }

  #isValidTheme(theme: string | null): theme is DaisyUITheme {
    return Object.values(DaisyUITheme).includes(theme as DaisyUITheme);
  }

  #getThemeFrom(stringValue: string | null): DaisyUITheme {
    if( !this.#isValidTheme(stringValue) ) {
      return DaisyUITheme.dark
    }

    return stringValue as DaisyUITheme;
  }
}

