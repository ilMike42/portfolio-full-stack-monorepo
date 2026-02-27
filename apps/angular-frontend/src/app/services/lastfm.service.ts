import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root',
})
export class LastfmService {
  #http = inject(HttpClient);

  #remoteTopTrack$ = this.#http.get<any>(`${environment.BASE_URL}/lastfm/toptrack`);
  
  #state = signal<any>({});
  trackInfo = computed(() => this.#state().trackInfo);


  constructor() {
    // reducers
    this.#remoteTopTrack$.pipe(takeUntilDestroyed()).subscribe((response) => {
      this.#state.update(state => ({ ...state, trackInfo: response }))
    });
  }
}
