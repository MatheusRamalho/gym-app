import React, { useState } from 'react'
import { SectionList, Text, View } from 'react-native'

import { HistoryCard } from '@/components/HistoyCard'
import { Header } from '@/components/Header'

export function History() {
    const [exercises] = useState([
        {
            title: '26.08.22',
            data: [
                { muscle: 'Costas', exercise: 'Puxada frontal', time: '08:56' },
                { muscle: 'Costas', exercise: 'remada unilateral', time: '08:32' },
            ],
        },
        { title: '28.08.22', data: [{ muscle: 'Costas', exercise: 'Puxada frontal', time: '11:24' }] },
    ])

    return (
        <View className="flex-1">
            <Header title="Histórico de exercícios" />

            <SectionList
                sections={exercises}
                keyExtractor={(item, index) => `${item} + ${index}`}
                renderItem={({ item }) => (
                    <HistoryCard muscle={item.muscle} exercise={item.exercise} time={item.time} />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="font-bold font-heading text-base text-gray-200 mt-12"> {title} </Text>
                )}
                className="px-8"
                contentContainerStyle={
                    exercises.length === 0 ? { flex: 1, justifyContent: 'center' } : { paddingBottom: 32, gap: 12 }
                }
                ListEmptyComponent={() => (
                    <Text className="text-gray-300 text-center text-base">
                        Parece que você não fez nenhum exercício ainda. {'\n'} Vamos treinar?!
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
