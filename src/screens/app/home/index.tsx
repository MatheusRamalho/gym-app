import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'

import { getGroups } from '@/api/group'
import { getExercises } from '@/api/exercise'

import { AppNavigatorRoutesProps } from '@/types/AppRoutes'

import { renderError } from '@/utils/renderError'

import { Header } from '@/components/Header'
import { MuscleGroup } from '@/components/MuscleGroup'
import { ExerciseCard } from '@/components/ExerciseCard'
import { Loading } from '@/components/Loading'

export function Home() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const [groupSelected, setGroupSelected] = useState('')

    const {
        data: groupsData,
        isPending: isPendingGroups,
        isError: isErrorGroups,
        error: errorGroups,
    } = useQuery({
        queryKey: ['groups'],
        queryFn: () => getGroups(),
    })

    if (isErrorGroups) {
        renderError(errorGroups, 'Não foi possível buscar os grupos musculares. Tente novamente mais tarde')
    }

    const {
        data: exercises,
        isPending: isPendingExercises,
        isError: isErrorExercises,
        error: errorExercises,
    } = useQuery({
        queryKey: ['exercises-by-group', groupSelected],
        queryFn: () => getExercises(groupSelected),
        enabled: !!groupSelected,
    })

    if (isErrorExercises) {
        renderError(
            errorExercises,
            `Não foi possível buscar os exercícios do grupo ${groupSelected}. Tente novamente mais tarde`,
        )
    }

    function handleToggleMuscle(muscle: string) {
        setGroupSelected(muscle)
    }

    function handleOpenExerciseDetails() {
        navigation.navigate('exercise')
    }

    return (
        <View className="flex-1">
            <Header isUser />

            {isPendingGroups ? (
                <Loading />
            ) : (
                <FlatList
                    data={groupsData}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <MuscleGroup
                            name={item}
                            isActive={String(groupSelected).toLocaleUpperCase() === String(item).toLocaleUpperCase()}
                            onPress={() => handleToggleMuscle(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 32, gap: 4 }}
                    className="my-10 min-h-14 max-h-14"
                    ListEmptyComponent={() => (
                        <Text className="font-body text-lg text-gray-400 text-center">
                            Nenhuma grupo muscular encontrado.
                        </Text>
                    )}
                />
            )}

            <View className="flex-1 px-8">
                <View className="flex-row items-center justify-between mb-8">
                    <Text className="text-gray-200 font-bold text-xl"> Exercicios </Text>

                    <View className="size-6 bg-gray-600 rounded items-center justify-center">
                        <Text className="text-gray-200 text-base"> {exercises ? exercises.length : 0} </Text>
                    </View>
                </View>

                {isPendingExercises ? (
                    <>
                        <Text className="font-body text-lg text-gray-200 text-center">
                            Seleciona outro grupo muscular.
                        </Text>

                        <Loading />
                    </>
                ) : (
                    <FlatList
                        data={exercises}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => (
                            <ExerciseCard
                                name={item.name}
                                series={item.series}
                                repetitions={item.repetitions}
                                image="https://conteudo.imguol.com.br/c/entretenimento/35/2019/04/09/pulley-frente-1554824315336_v2_1254x837.jpg"
                                onPress={handleOpenExerciseDetails}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 32, gap: 12 }}
                        ListEmptyComponent={() => (
                            <Text className="font-body text-lg text-gray-400 text-center">
                                Nenhuma exercício encontrado. Escolha outro grupo muscular.
                            </Text>
                        )}
                    />
                )}
            </View>
        </View>
    )
}
