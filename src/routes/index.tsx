import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useAuth } from '@/hooks/useAuth'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { Loading } from '@/components/Loading'

export function Routes() {
    const { user, isLoading: isLoadingUser } = useAuth()
    console.log(user)

    const theme = DefaultTheme
    theme.colors.background = '#0F0F10'

    if (isLoadingUser) {
        return <Loading />
    }

    return (
        <View className="flex-1 bg-gray-900">
            <NavigationContainer theme={theme}>{user ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
        </View>
    )
}
