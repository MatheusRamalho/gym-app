import { Text, View } from 'react-native'

import LogoSvg from '@/assets/svgs/logo.svg'

export function Brand() {
    return (
        <View className="items-center">
            <LogoSvg />
            <Text className="text-base text-gray-100"> Treine sua mente e o seu corpo. </Text>
        </View>
    )
}
