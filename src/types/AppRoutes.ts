import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type AppRoutesProps = {
    home: undefined
    exercise: undefined
    history: undefined
    profile: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>
