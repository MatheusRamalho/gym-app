import { api } from '@/libs/axios'

export async function getGroups() {
    const response = await api.get<string[]>('/groups')

    return response.data
}
