// import { createConfig } from '@gluestack-style/react'
import { config as defaultConfig } from '@gluestack-ui/config'
import { createConfig } from '@gluestack-ui/themed'

export const config = createConfig({
    ...defaultConfig,
    tokens: {
        ...defaultConfig.tokens,
        colors: {
            ...defaultConfig.tokens.colors,
            white: '#FFFFFF',
            primary500: '#00B37E',
            primary700: '#00875F',
            red500: '#F75A68',
            gray100: '#E1E1E6',
            gray200: '#C4C4CC',
            gray300: '#7C7C8A',
            gray400: '#323238',
            gray500: '#29292E',
            gray600: '#202024',
            gray700: '#121214',
        },
        fonts: {
            ...defaultConfig.tokens.fonts,
            heading: 'Roboto_700Bold',
            body: 'Roboto_400Regular',
        },
        fontSizes: {
            ...defaultConfig.tokens.fontSizes,
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
        },
        space: {
            ...defaultConfig.tokens.space,
            14: 56,
            33: 148,
        },
    },
} as const)

type ConfigType = typeof config
type Components = typeof defaultConfig.components

declare module '@gluestack-style/react' {
    interface ICustomConfig extends ConfigType {}
    interface ICustomComponents extends Components {}
}
