import { Text, View } from 'react-native'

interface HeaderScreenProps {
    title: string
}

export function HeaderScreen({ title }: HeaderScreenProps) {
    return (
        <View className="pb-12 py-20 bg-gray-600 items-center justify-center">
            <Text className="font-bold font-heading text-xl text-gray-100"> {title} </Text>
        </View>
    )
}
