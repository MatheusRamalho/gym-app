import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AuthRoutes } from './Auth.routes'

export function Routes() {
    const theme = DefaultTheme
    theme.colors.background = '#121214'

    return (
        <View className="flex-1 bg-gray-700">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </View>
    )
}
