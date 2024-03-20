import clsx from 'clsx'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import colors from 'tailwindcss/colors'

interface InputProps extends TextInputProps {
    isInvalid?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorMessage?: string | any
}

export function Input({ isInvalid = false, errorMessage, ...rest }: InputProps) {
    return (
        <View className="">
            <TextInput
                className={clsx(
                    'w-full h-16 bg-gray-800 border border-gray-600 rounded-md px-4 font-body text-base text-white focus:border-green-500 disabled:cursor-not-allowed disabled:bg-red-500',
                    isInvalid && '!border-red-500',
                )}
                textAlignVertical="top"
                placeholderTextColor={colors.gray[400]}
                {...rest}
            />

            <Text className="font-body text-sm text-red-500"> {errorMessage} </Text>
        </View>
    )
}
