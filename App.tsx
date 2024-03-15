/* eslint-disable camelcase */
import { StatusBar, Text, View } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular,
    })

    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202024' }}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Text style={{ color: 'white' }}> Hello World </Text>
        </View>
    )
}
