import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelinePlaceholderComponent } from './timeline-placeholder.component';

describe('TimelinePlaceholderComponent', () => {
  let component: TimelinePlaceholderComponent;
  let fixture: ComponentFixture<TimelinePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePlaceholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelinePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
