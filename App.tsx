/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { QueryClientProvider } from '@tanstack/react-query'

import '@/styles/global.css'

import { queryClient } from '@/libs/react-query'

import { Routes } from '@/routes'

import { AuthContextProvider } from '@/contexts/AuthContext'

import { Loading } from '@/components/Loading/Loading'

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

            <QueryClientProvider client={queryClient}>
                <AuthContextProvider>
                    <Routes />
                </AuthContextProvider>
            </QueryClientProvider>
        </>
    )
}
