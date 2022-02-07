import 'styled-components'
import theme from './lightTheme'
/* eslint-disable */
declare module 'styled-components' {
  // criado um ThemeType
  // o typeof seria uma atalho para copiar tudo que tem no theme e gerar de aocrdo com ele
  type ThemeType = typeof theme

  // aq dentro do module, vamos exportar a interface do DefaultTheme extendendo ele para o tEheme
  export interface DefaultTheme extends ThemeType {}
}
