import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import clsx from 'clsx'

interface ButtonProps extends TouchableOpacityProps {
    title: string
    variant?: 'primary' | 'secondary'
}

export function Button({ title, variant = 'primary', ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={clsx(
                'w-full h-16 bg-green-700 border border-transparent items-center justify-center rounded-md active:cursor-pointer group active:bg-green-500',
                variant === 'secondary' && 'bg-transparent !border-green-700 active:bg-green-500',
            )}
            {...rest}
        >
            <Text
                className={clsx(
                    'font-bold text-lg text-white font-heading',
                    variant === 'secondary' && '!text-green-700 group-active:!text-white',
                )}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}
