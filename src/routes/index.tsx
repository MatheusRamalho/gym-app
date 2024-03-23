import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useAuth } from '@/hooks/useAuth'

import { Loading } from '@/components/Loading'

import { AuthRoutes } from '@/routes/auth.routes'
import { AppRoutes } from '@/routes/app.routes'

export function Routes() {
    const { user, isLoading: isLoadingUser } = useAuth()

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
