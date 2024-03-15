import { Text, View } from 'react-native'

interface HeadingProps {
    title: string
}

export function Heading({ title }: HeadingProps) {
    return (
        <View className="mb-6">
            <Text className="font-heading font-bold text-xl text-gray-100"> {title} </Text>
        </View>
    )
}
