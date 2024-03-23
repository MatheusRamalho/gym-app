import { api } from '@/libs/axios'

interface SetSignUpParams {
    name: string
    email: string
    password: string
}

export async function setSignUp({ name, email, password }: SetSignUpParams) {
    const response = await api.post(`/users`, {
        name,
        email,
        password,
    })

    return response.data
}
