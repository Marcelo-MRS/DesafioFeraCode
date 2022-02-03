import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    primary: string,
    secundary: string,
    tertiary: string,
    highlight: string,
    text: string,
  }
}
