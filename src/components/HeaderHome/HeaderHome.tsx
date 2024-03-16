import { Text, TouchableOpacity, View } from 'react-native'

import { Avatar } from '../Avatar'

import LogoutSvg from '@/assets/svgs/logout.svg'

export function HeaderHome() {
    return (
        <View className="p-8 pt-20 bg-gray-600 flex-row items-center gap-4">
            <View className="flex-1 flex-row gap-4">
                <Avatar source={{ uri: 'https://github.com/MatheusRamalho.png' }} alt="Foto do usuário" />

                <View className="">
                    <Text className="text-base text-gray-100"> Olá, </Text>
                    <Text className="font-bold font-heading text-lg text-gray-100"> Matheus Ramalho </Text>
                </View>
            </View>

            <TouchableOpacity>
                <LogoutSvg width={24} height={24} fill="#7C7C8A" />
            </TouchableOpacity>
        </View>
    )
}
