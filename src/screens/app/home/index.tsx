import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import { HeaderHome } from '@/components/HeaderHome'
import { MuscleGroup } from '@/components/MuscleGroup'
import { ExerciseCard } from '@/components/ExerciseCard'

export function Home() {
    const [groups] = useState(['Costas', 'Ombro', 'Bíceps', 'Tríceps', 'Quadríceps'])
    const [groupSelected, setGroupSelected] = useState('costas')
    const [exercises] = useState([
        { id: '123', name: 'Puxada frontal', series: 3, repetitions: 12 },
        { id: '12345', name: 'Reamda curvada', series: 3, repetitions: 12 },
        { id: '123456', name: 'Remada unilateral', series: 3, repetitions: 12 },
        { id: '1234567', name: 'Levantamenmto terra', series: 3, repetitions: 12 },
    ])

    return (
        <View className="flex-1">
            <HeaderHome />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <MuscleGroup
                        name={item}
                        isActive={String(groupSelected).toLocaleUpperCase() === String(item).toLocaleUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 32, gap: 4 }}
                className="my-10 max-h-14"
            />

            <View className="flex-1 px-8">
                <View className="flex-row items-center justify-between mb-8">
                    <Text className="text-gray-200 font-bold text-xl"> Exercicios </Text>

                    <View className="size-6 bg-gray-600 rounded items-center justify-center">
                        <Text className="text-gray-200 text-base"> 4 </Text>
                    </View>
                </View>

                <FlatList
                    data={exercises}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ExerciseCard
                            name={item.name}
                            series={item.series}
                            repetitions={item.repetitions}
                            image="https://conteudo.imguol.com.br/c/entretenimento/35/2019/04/09/pulley-frente-1554824315336_v2_1254x837.jpg"
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 32, gap: 12 }}
                />
            </View>
        </View>
    )
}
