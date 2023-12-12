import { Route } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TimelineComponent } from './features/timeline/timeline.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent }
];
