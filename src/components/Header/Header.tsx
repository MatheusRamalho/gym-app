import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '@/hooks/useAuth'

import { Avatar } from '@/components/Avatar'

import avatarImg from '@/assets/imgs/userPhotoDefault.png'
import LogoutSvg from '@/assets/svgs/logout.svg'
import ArrowLeftSvg from '@/assets/svgs/arrow-left.svg'
import BodySvg from '@/assets/svgs/body.svg'

interface HeaderProps {
    isUser?: boolean
    title?: string
    description?: string
}

export function Header({ isUser = false, title, description }: HeaderProps) {
    const navigation = useNavigation()
    const { user, signOut } = useAuth()

    function handleGoBack() {
        navigation.goBack()
    }

    function handleSignOut() {
        signOut()
    }

    return (
        <View className="p-8 pt-20 bg-gray-800 border-b border-b-gray-700 flex-row items-center gap-4">
            <View className="flex-1 flex-row gap-4">
                {isUser ? (
                    <>
                        <Avatar
                            source={user && user.avatar ? { uri: user?.avatar } : avatarImg}
                            alt={user?.name || 'Avatar do usuário'}
                        />

                        <View className="">
                            <Text className="text-base text-gray-100"> Olá, </Text>

                            <Text className="font-bold font-heading text-xl text-gray-100">
                                {user?.name || 'Usuário'}
                            </Text>
                        </View>
                    </>
                ) : (
                    <View className="flex-1 gap-3">
                        <TouchableOpacity onPress={handleGoBack}>
                            <ArrowLeftSvg width={24} height={24} fill="#00B37E" />
                        </TouchableOpacity>

                        <View className="gap-3">
                            <Text className="font-bold font-heading text-xl text-gray-100"> {title} </Text>

                            {description && (
                                <View className="flex-row gap-1">
                                    <BodySvg width={18} height={18} fill="#7C7C8A" />
                                    <Text className="font-body text-base text-gray-400 capitalize">{description}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                )}
            </View>

            <TouchableOpacity onPress={handleSignOut}>
                <LogoutSvg width={24} height={24} fill="#00B37E" />
            </TouchableOpacity>
        </View>
    )
}
