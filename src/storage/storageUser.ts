import AsyncStorage from '@react-native-async-storage/async-storage'

import { USER_STORAGE } from '@/constants/storage'

import { User } from '@/types/User'

export async function storageUserSet(user: User) {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function storageUserGet() {
    const storage = await AsyncStorage.getItem(USER_STORAGE)
    const user: User = storage ? JSON.parse(storage) : null

    return user
}

export async function storageUserRemove() {
    await AsyncStorage.removeItem(USER_STORAGE)
}
