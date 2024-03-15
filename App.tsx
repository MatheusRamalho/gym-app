/* eslint-disable camelcase */
import { Text, View } from 'react-native'
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
        <View>
            <Text> Hello World </Text>
        </View>
    )
}
