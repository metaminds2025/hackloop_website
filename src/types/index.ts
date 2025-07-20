export interface Organizer {
  name: string;
  designation?: string;
  company?: string;
  email: string;
  phone?: string;
  linkedin: string;
  instagram?: string;
  image?: string;
}

export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  card: string;
}

export type ThemeMode = 'light' | 'dark' | 'neon';