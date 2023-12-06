export interface TimelineState {
  timelineSections: TimelineSection[]
}

export interface TimelineSection {
  title: string,
  subSections: TimelineSubSection[]
}

export interface TimelineSubSection {
  tags: string[]
  items: TimelineItem[]
}

export interface TimelineItem {
  year: string,
  title: string,
  description: string
}