import { api } from '@/libs/axios'

import { Exercise } from '@/types/Exercise'

export async function getExercises(group: string) {
    const response = await api.get<Exercise[]>(`/exercises/bygroup/${group}`)

    return response.data
}
