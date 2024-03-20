import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AuthRoutes } from './Auth.routes'
import { AppRoutes } from './App.routes'

export function Routes() {
    const theme = DefaultTheme
    theme.colors.background = '#0F0F10'

    return (
        <View className="flex-1 bg-gray-900">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
                {/* <AppRoutes /> */}
            </NavigationContainer>
        </View>
    )
}
