export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface SubjectCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  modelType: string;
}

export interface EventCard {
  id: number;
  title: string;
  date: string;
  description: string;
  badge: string;
}

export interface SoundEffects {
  hoverSound: string;
  clickSound: string;
  eraseSound: string;
  writeSound: string;
}