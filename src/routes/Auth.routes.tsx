import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '@/screens/auth/signIn'
import { SignUp } from '@/screens/auth/signUp'
import { AuthRoutesProps } from '@/types/AuthRoutes'

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>()

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signIn" component={SignIn} />
            <Screen name="signUp" component={SignUp} />
        </Navigator>
    )
}
