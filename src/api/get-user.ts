import { api } from '@/libs/axios'

import { Group } from '@/types/Group'

interface GetGroupsParams {
    responseId: string
}

export async function getGroupsTanstackQuery({ responseId }: GetGroupsParams) {
    const response = await api.get<Group>(`/groups/${responseId}`)

    return response.data
}

// import { useQuery } from '@tanstack/react-query'

// const { data, isFetching, error } = useQuery({
//     queryKey: ['groups', responseId],
//     queryFn: () => getGroups({ responseId }),
// })
