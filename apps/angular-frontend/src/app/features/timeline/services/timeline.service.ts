import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environment';

interface TimelineState {
  timelineItems: TimelineItem[]
}

export interface TimelineItem {
  year: string,
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  #http = inject(HttpClient);
  
  #remoteTimelineItems$ = this.#http.get<TimelineItem[]>(`${environment.BASE_URL}/timeline`);
  
  #state = signal<TimelineState>({
    timelineItems: []
  });

  timelineItems = computed(() => this.#state().timelineItems);

  constructor() {
    // reducers
    this.#remoteTimelineItems$.pipe(takeUntilDestroyed()).subscribe((response) => {
      this.#state.update(state => ({ ...state, timelineItems: response }))
    });
  }


}

