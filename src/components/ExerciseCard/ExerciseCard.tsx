import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import ChevronRightSvg from '@/assets/svgs/chevron-right.svg'

interface ExerciseCardProps extends TouchableOpacityProps {
    image: string
    name: string
    series: number
    repetitions: number
}

export function ExerciseCard({ image, name, series, repetitions, ...rest }: ExerciseCardProps) {
    return (
        <TouchableOpacity
            className="w-full h-24 px-4 rounded-xl bg-gray-600 border border-gray-500 flex-row items-center justify-between gap-4"
            {...rest}
        >
            <View className="flex-1 flex-row items-center gap-4">
                <View className="size-16 bg-gray-700 border border-gray-500 rounded-lg">
                    <Image
                        className="size-full border border-gray-500 rounded-lg"
                        source={{ uri: image }}
                        alt={name}
                        resizeMode="cover"
                    />
                </View>

                <View className="flex-1 gap-1">
                    <Text className="text-white font-heading font-bold text-lg"> {name} </Text>

                    <Text className="text-gray-200 font-body" numberOfLines={2}>
                        {series} séries x {repetitions} repetições
                    </Text>
                </View>
            </View>

            <ChevronRightSvg width={20} height={20} fill="#7C7C8A" />
        </TouchableOpacity>
    )
}
