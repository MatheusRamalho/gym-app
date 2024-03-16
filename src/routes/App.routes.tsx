import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeSvg from '@/assets/svgs/home.svg'
import HistorySvg from '@/assets/svgs/history.svg'
import ProfileSvg from '@/assets/svgs/profile.svg'

import { Exercise } from '@/screens/app/exercise'
import { Home } from '@/screens/app/home'
import { Profile } from '@/screens/app/profile'
import { History } from '@/screens/app/history'

import { AppRoutesProps } from '@/types/AppRoutes'

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#00875F',
                tabBarInactiveTintColor: '#C4C4CC',
                tabBarStyle: {
                    borderTopColor: '#29292E',
                    backgroundColor: '#0F0F10',
                    paddingTop: 24,
                    paddingBottom: 40,
                    // Altura baseado no android ou ios (Platform)
                    height: Platform.OS === 'android' ? 'auto' : 96,
                },
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <HomeSvg width={32} height={32} fill={color} />,
                }}
            />

            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => <HistorySvg width={32} height={32} fill={color} />,
                }}
            />

            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <ProfileSvg width={32} height={32} fill={color} />,
                }}
            />

            <Screen name="exercise" component={Exercise} options={{ tabBarButton: () => null }} />
        </Navigator>
    )
}
