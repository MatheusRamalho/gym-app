import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useAuth } from '@/hooks/useAuth'

import { AuthRoutes } from './Auth.routes'
// import { AppRoutes } from './App.routes'

export function Routes() {
    const { user } = useAuth()
    console.log('USUARIO LOGADO', user)

    const theme = DefaultTheme
    theme.colors.background = '#0F0F10'

    return (
        <View className="flex-1 bg-gray-900">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </View>
    )
}
