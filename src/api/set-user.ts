import { api } from '@/lib/axios'

interface UserParams {
    name: string
    email: string
    password: string
}

export async function createUser({ name, email, password }: UserParams) {
    const response = await api.post(`/users`, {
        name,
        email,
        password,
    })

    return response.data
}
