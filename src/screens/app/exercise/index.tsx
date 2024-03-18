import { Image, ScrollView, Text, View } from 'react-native'

import SeriesSvg from '@/assets/svgs/series.svg'
import RepetitionsSvg from '@/assets/svgs/repetitions.svg'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'

export function Exercise() {
    return (
        <View className="flex-1">
            <Header title="Exercício alguma coisa" description="Costas" />

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

                    <View className="bg-gray-700 border border-gray-600 p-4 rounded-lg">
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
