import clsx from 'clsx'
import { Image, ImageProps } from 'react-native'

interface AvatarProps extends ImageProps {
    size?: 'large'
    alt: string
}

export function Avatar({ size, alt, ...rest }: AvatarProps) {
    return (
        <Image
            className={clsx('rounded-full boorder-2 border-gray-400', size === 'large' ? 'size-32' : 'size-14')}
            alt={alt}
            {...rest}
        />
    )
}
