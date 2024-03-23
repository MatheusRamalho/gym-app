import { ReactNode } from 'react'
import { ScrollView, View, Text, Image, GestureResponderEvent } from 'react-native'

import BackgroundImg from '@/assets/imgs/background.png'
import { Brand } from '@/components/Brand'
import { Button } from '@/components/Button'

interface AuthLayoutProps {
    title: string
    buttonSecoondaryText: string
    onPressSecondary?: ((event: GestureResponderEvent) => void) | undefined
    children: ReactNode
}

export function AuthLayout({ title, buttonSecoondaryText, children, onPressSecondary }: AuthLayoutProps) {
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

                    <View className="w-full gap-2">{children}</View>
                </View>

                <View className="mt-10 items-center gap-3">
                    <Button title={buttonSecoondaryText} variant="secondary" onPress={onPressSecondary} />
                </View>
            </View>
        </ScrollView>
    )
}
