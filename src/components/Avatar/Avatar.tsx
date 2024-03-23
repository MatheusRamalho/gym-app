import clsx from 'clsx'
import { Image, ImageProps, View } from 'react-native'

interface AvatarProps extends ImageProps {
    size?: 'large'
    alt: string
}

export function Avatar({ size, alt, ...rest }: AvatarProps) {
    return (
        <View
            className={clsx(
                'rounded-full bg-gray-700 border border-gray-600',
                size === 'large' ? 'size-32' : 'size-14',
            )}
        >
            <Image
                className={clsx('rounded-full boorder-2 border-gray-400', size === 'large' ? 'size-32' : 'size-14')}
                alt={alt}
                {...rest}
            />
        </View>
    )
}
