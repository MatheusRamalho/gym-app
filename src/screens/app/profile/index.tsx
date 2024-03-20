import { useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Skeleton } from '@/components/Skeleton'
import { Header } from '@/components/Header'

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState<boolean>(false)
    const [userPhoto, setUserPhoto] = useState<string>('https://github.com/MatheusRamalho.png')

    // Acessar album do dispositivo
    async function handleUserPhotoSelect() {
        setPhotoIsLoading(true)

        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images, // Tipo de arquivo
                quality: 1, // Quanlidade da imagem, vai de 0 a 1
                aspect: [4, 4], // Aspecto da iamgem
                allowsEditing: true, // Habilitar a edição da imagem pelo usuario
            })

            if (photoSelected.canceled) return

            if (photoSelected.assets[0].uri) {
                // Para bloquear upar foto com mais de 5mb
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)

                if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
                    return Alert.alert('essa imagem é muito grande. Escolha uma até 5MB')
                }

                setUserPhoto(photoSelected.assets[0].uri)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setPhotoIsLoading(false)
        }
    }

    return (
        <View className="flex-1">
            <Header title="Perfil" />

            <View className="my-10 items-center">
                {photoIsLoading ? (
                    <Skeleton className="size-32 bg-gray-600 rounded-full" />
                ) : (
                    <Avatar size="large" source={{ uri: userPhoto }} alt="Foto do usuário" />
                )}

                <TouchableOpacity onPress={handleUserPhotoSelect}>
                    <Text className="text-green-500 font-bold text-lg mt-4"> Alterar foto </Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="grow pb-20" showsVerticalScrollIndicator={false}>
                <View className="w-full gap-12 px-8">
                    <View className="gap-5">
                        <Input placeholder="Nome" />
                        <Input value="email@email.com" editable={false} selectTextOnFocus={false} />
                    </View>

                    <View className="gap-5">
                        <Text className="text-gray-100 font-base font-bold"> Alterar senha </Text>

                        <Input placeholder="Senha atual" secureTextEntry />
                        <Input placeholder="Nova senha" secureTextEntry />
                        <Input placeholder="Confirme a nova senha" secureTextEntry />
                    </View>

                    <Button title="Atualizar" />
                </View>
            </ScrollView>
        </View>
    )
}
