import { Image, ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import BackgroundImg from '@/assets/imgs/background.png'

import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Brand } from '@/components/Brand'

import { AuthNavigatorRoutesProps } from '@/types/AuthRoutes'

export function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.goBack()
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
                    <Heading title="Crie sua conta" />

                    <View className="w-full gap-5">
                        <Input placeholder="Nome" />
                        <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
                        <Input placeholder="Senha" secureTextEntry />
                        <Input placeholder="Confirme a senha" secureTextEntry />

                        <Button title="Criar e acessar" />
                    </View>
                </View>

                <View className="items-center gap-3">
                    <Button title="Voltar para o login" variant="secondary" onPress={handleGoBack} />
                </View>
            </View>
        </ScrollView>
    )
}
