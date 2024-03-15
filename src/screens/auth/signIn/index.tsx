import { Image, ScrollView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import BackgroundImg from '@/assets/imgs/background.png'

import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Brand } from '@/components/Brand'

import { AuthNavigatorRoutesProps } from '@/types/AuthRoutes'

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount() {
        navigation.navigate('signUp')
    }

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
                    <Heading title="Acesse sua conta" />

                    <View className="w-full gap-5">
                        <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
                        <Input placeholder="Senha" secureTextEntry />

                        <Button title="Acessar" />
                    </View>
                </View>

                <View className="items-center gap-3">
                    <Text className="text-base text-gray-100"> Ainda não tem acesso? </Text>
                    <Button title="Criar conta" variant="secondary" onPress={handleNewAccount} />
                </View>
            </View>
        </ScrollView>
    )
}
