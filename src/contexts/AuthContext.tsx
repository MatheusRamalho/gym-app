/* eslint-disable no-useless-catch */
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import { User } from '@/types/User'
import { setSignIn } from '@/api/sign-in'
import { AppError } from '@/utils/appError'
import { storageUserSet, storageUserGet, storageUserRemove } from '@/storage/storageUser'

interface AuthContextProps {
    user: User | null
    isLoading: boolean
    signIn: (email: string, password: string) => Promise<void>
    signOut: () => Promise<void>
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null)
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
                setUser(response.user)
                storageUserSet(response.user)
            }
        } catch (error) {
            throw error
        } finally {
            setIsLoading(isPending)
        }
    }

    async function signOut() {
        try {
            setIsLoading(true)
            setUser(null)
            await storageUserRemove()
        } catch (error) {
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    async function loadUserData() {
        setIsLoading(true)

        try {
            const userLogged = await storageUserGet()

            if (userLogged) {
                setUser(userLogged)
            }
        } catch (error) {
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadUserData()
    }, [])

    return <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>
}
