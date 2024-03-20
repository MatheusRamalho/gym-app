import { ReactNode } from 'react'
import { ScrollView, View, Text, Image, GestureResponderEvent } from 'react-native'

import { Brand } from '@/components/Brand'
import { Button } from '@/components/Button'

import BackgroundImg from '@/assets/imgs/background.png'

interface AuthLayoutProps {
    title: string
    buttonPrimaryText: string
    buttonSecoondaryText: string
    onPressPrimary?: ((event: GestureResponderEvent) => void) | undefined
    onPressSecondary?: ((event: GestureResponderEvent) => void) | undefined
    children: ReactNode
}

export function AuthLayout({
    title,
    buttonPrimaryText,
    buttonSecoondaryText,
    children,
    onPressPrimary,
    onPressSecondary,
}: AuthLayoutProps) {
    return (
        <ScrollView contentContainerClassName="grow" showsVerticalScrollIndicator={false}>
            <View className="flex-1 p-4 pb-16">
                <Image
                    className="absolute"
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                />

                <View className="my-32">
                    <Brand />
                </View>

                <View className="flex-1 items-center">
                    <View className="mb-6">
                        <Text className="font-heading font-bold text-xl text-gray-100"> {title} </Text>
                    </View>

                    <View className="w-full gap-5">
                        {children}

                        <Button title={buttonPrimaryText} onPress={onPressPrimary} />
                    </View>
                </View>

                <View className="items-center gap-3">
                    <Button title={buttonSecoondaryText} variant="secondary" onPress={onPressSecondary} />
                </View>
            </View>
        </ScrollView>
    )
}
