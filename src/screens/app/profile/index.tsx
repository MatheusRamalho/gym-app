import { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { HeaderScreen } from '@/components/HeaderScreen'
import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Skeleton } from '@/components/Skeleton'

export function Profile() {
    const [phoIsLoading] = useState<boolean>(false)

    return (
        <View className="flex-1">
            <HeaderScreen title="Perfil" />

            <View className="my-10 items-center">
                {phoIsLoading ? (
                    <Skeleton className="size-32 bg-gray-600 rounded-full" />
                ) : (
                    <Avatar
                        size="large"
                        source={{ uri: 'https://github.com/MatheusRamalho.png' }}
                        alt="Foto do usuário"
                    />
                )}

                <TouchableOpacity>
                    <Text className="text-green-500 font-bold text-lg mt-4"> Alterar foto </Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="grow pb-20" showsVerticalScrollIndicator={false}>
                <View className="w-full gap-12 px-8">
                    <View className="gap-5">
                        <Input placeholder="Nome" />
                        <Input value="email@email.com" editable={false} selectTextOnFocus={false} />
                    </View>

                    <View className="gap-5">
                        <Text className="text-gray-100 font-base font-bold"> Alterar senha </Text>

                        <Input placeholder="Senha atual" secureTextEntry />
                        <Input placeholder="Nova senha" secureTextEntry />
                        <Input placeholder="Confirme a nova senha" secureTextEntry />
                    </View>

                    <Button title="Atualizar" />
                </View>
            </ScrollView>
        </View>
    )
}
