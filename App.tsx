/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './gluestack-style.config'

import { Loading } from '@/components/Loading'
import { Signin } from '@/screens/signin'

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular,
    })

    if (!fontsLoaded && !fontError) {
        return <Loading />
    }

    return (
        <GluestackUIProvider config={config}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Signin />
        </GluestackUIProvider>
    )
}
