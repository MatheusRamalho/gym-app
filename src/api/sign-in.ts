import { api } from '@/libs/axios'

interface SetSignInParams {
    email: string
    password: string
}

export async function setSignIn({ email, password }: SetSignInParams) {
    const response = await api.post(`/sessions`, {
        email,
        password,
    })

    return response.data
}
