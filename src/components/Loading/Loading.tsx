import { ActivityIndicator } from 'react-native'
import colors from 'tailwindcss/colors'

export function Loading() {
    return <ActivityIndicator className="flex-1" color={colors.green[600]} />
}
