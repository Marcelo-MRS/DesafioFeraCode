export type ThemeMode = 'light' | 'dark';

export interface ThemeContext {
  mode: ThemeMode;
  setMode(mode: ThemeMode): void;
}

export interface Theme {
  title: string;
  primary: string,
  secundary: string,
  tertiary: string,
  highlight: string,
  text: string,
}
