/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import '@/styles/global.css'

import { Loading } from '@/components/Loading/Loading'
import { SignUp } from '@/screens/auth/signUp'

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular,
    })

    if (!fontsLoaded && !fontError) {
        return <Loading />
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <SignUp />
        </>
    )
}
