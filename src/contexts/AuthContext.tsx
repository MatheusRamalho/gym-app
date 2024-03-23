/* eslint-disable no-useless-catch */
import { ReactNode, createContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import { setSignIn } from '@/api/sign-in'
import { AppError } from '@/utils/appError'
import { User } from '@/types/User'

interface AuthContextProps {
    user: User
    isLoading: boolean
    signIn: (email: string, password: string) => Promise<void>
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { mutateAsync: signInMutation, isPending } = useMutation({
        mutationFn: setSignIn,
        onError: (error) => {
            const isAppError = error instanceof AppError
            const message = isAppError ? error.message : 'Não foi possível logar. Tente novamente mais tarde'

            alert(message)
        },
    })

    async function signIn(email: string, password: string) {
        setIsLoading(isPending)

        try {
            const response = await signInMutation({ email, password })

            if (response) {
                setUser(response)
            }
        } catch (error) {
            throw error
        } finally {
            setIsLoading(isPending)
        }
    }

    return <AuthContext.Provider value={{ user, signIn, isLoading }}>{children}</AuthContext.Provider>
}
