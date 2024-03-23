/* eslint-disable no-useless-catch */
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import { User } from '@/types/User'
import { api } from '@/libs/axios'
import { setSignIn } from '@/api/sign-in'
import { AppError } from '@/utils/appError'
import { storageUserSet, storageUserGet, storageUserRemove } from '@/storage/storageUser'
import { storageAuthTokenSet, storageAuthTokenGet, storageAuthTokenRemove } from '@/storage/storageAuthToken'

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

    async function userAndTokenUpdate(user: User, token: string) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setUser(user)
    }

    async function storageUserAndTokenSave(user: User, token: string) {
        try {
            setIsLoading(true)

            await storageUserSet(user)
            await storageAuthTokenSet(token)
        } catch (error) {
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    async function storageUserAndTokenGet() {
        try {
            setIsLoading(true)

            const userLogged = await storageUserGet()
            const tokenUserLogged = await storageAuthTokenGet()

            return {
                userLogged,
                tokenUserLogged,
            }
        } catch (error) {
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    async function signIn(email: string, password: string) {
        try {
            setIsLoading(isPending)

            const data = await signInMutation({ email, password })

            if (data.user && data.token) {
                storageUserAndTokenSave(data.user, data.token)
                userAndTokenUpdate(data.user, data.token)
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
            await storageAuthTokenRemove()
        } catch (error) {
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    async function loadUserData() {
        try {
            setIsLoading(true)

            const { userLogged, tokenUserLogged } = await storageUserAndTokenGet()

            if (tokenUserLogged && userLogged) {
                userAndTokenUpdate(userLogged, tokenUserLogged)
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
