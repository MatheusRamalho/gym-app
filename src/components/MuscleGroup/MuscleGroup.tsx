import clsx from 'clsx'
import { Pressable, PressableProps, Text } from 'react-native'

interface MuscleGroupProps extends PressableProps {
    name: string
    isActive: boolean
}

export function MuscleGroup({ name, isActive = false, ...rest }: MuscleGroupProps) {
    return (
        <Pressable
            className={clsx(
                'w-24 h-12 m-1 border border-gray-600 bg-gray-700 rounded items-center justify-center overflow-hidden active:border-green-500',
                isActive && '!border-green-500',
            )}
            {...rest}
        >
            <Text className="font-bold text-gray-100 uppercase text-sm">{name}</Text>
        </Pressable>
    )
}
