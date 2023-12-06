import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environment';
import { TimelineSection, TimelineState } from '../models/timeline.models';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  #http = inject(HttpClient);
  
  #remoteTimelineItems$ = this.#http.get<TimelineSection[]>(`${environment.BASE_URL}/timeline`);
  
  #state = signal<TimelineState>({
    timelineSections: []
  });

  timelineSections = computed(() => this.#state().timelineSections);

  constructor() {
    // reducers
    this.#remoteTimelineItems$.pipe(takeUntilDestroyed()).subscribe((response) => {
      this.#state.update(state => ({ ...state, timelineSections: response }))
    });
  }


}

