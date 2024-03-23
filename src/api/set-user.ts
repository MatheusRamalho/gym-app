import { api } from '@/libs/axios'

interface SetUserParams {
    name: string
    email: string
    password: string
}

export async function setUser({ name, email, password }: SetUserParams) {
    const response = await api.post(`/users`, {
        name,
        email,
        password,
    })

    return response.data
}
