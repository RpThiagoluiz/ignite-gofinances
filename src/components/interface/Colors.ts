import theme from 'global/theme/lightTheme'

type ThemeType = typeof theme

type JustColors = ThemeType['colors']

// Poderia pegar o keyOf do objeto e fazer um type para cada key
// e adicionar dentro do Colors.

export type Colors = Omit<JustColors, 'iconsRegister' | 'iconsRegister_disabled'>
