import { View } from 'react-native'
import clsx from 'clsx'

interface SkeletonProps {
    className: string
}

export function Skeleton({ className }: SkeletonProps) {
    return <View className={clsx(className)} />
}
