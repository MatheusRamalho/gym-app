import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ArrowLeftSvg from '@/assets/svgs/arrow-left.svg'
import SeriesSvg from '@/assets/svgs/series.svg'
import RepetitionsSvg from '@/assets/svgs/repetitions.svg'
import BodySvg from '@/assets/svgs/body.svg'

import { AppNavigatorRoutesProps } from '@/types/AppRoutes'

import { Button } from '@/components/Button'

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <View className="flex-1">
            <View className="p-8 pb-12 py-20 bg-gray-600 gap-4">
                <TouchableOpacity onPress={handleGoBack}>
                    <ArrowLeftSvg width={24} height={24} fill="#00B37E" />
                </TouchableOpacity>

                <View className="flex-row justify-between gap-2">
                    <Text className="flex-1 font-bold font-heading text-xl text-gray-100"> Exercício alguma </Text>

                    <View className="flex-row gap-1">
                        <BodySvg width={18} height={18} fill="#7C7C8A" />
                        <Text className="font-body text-base text-gray-100 capitalize"> Costas </Text>
                    </View>
                </View>
            </View>

            <ScrollView contentContainerClassName="grow" showsVerticalScrollIndicator={false}>
                <View className="p-8 gap-8">
                    <View className="size-96 bg-gray-600 border border-gray-500 rounded-lg overflow-hidden">
                        <Image
                            className="size-full border border-gray-500 rounded-lg"
                            source={{
                                uri: 'https://conteudo.imguol.com.br/c/entretenimento/35/2019/04/09/pulley-frente-1554824315336_v2_1254x837.jpg',
                            }}
                            alt=""
                            resizeMode="cover"
                        />
                    </View>

                    <View className="bg-gray-600 p-4 rounded-lg">
                        <View className="flex-row items-center justify-center gap-6 mb-6">
                            <View className="flex-row gap-1 items-center">
                                <SeriesSvg width={24} height={24} fill="#00B37E" />
                                <Text className="text-gray-100 text-lg"> 3 Séries </Text>
                            </View>

                            <View className="flex-row gap-1 items-center">
                                <RepetitionsSvg width={24} height={24} fill="#00B37E" />
                                <Text className="text-gray-100 text-lg"> 12 repetições </Text>
                            </View>
                        </View>

                        <Button title="Marcar como realizado" />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
