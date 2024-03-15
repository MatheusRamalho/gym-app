import { TextInput, TextInputProps } from 'react-native'
import colors from 'tailwindcss/colors'

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="w-full h-16 bg-gray-700 border border-gray-600 rounded-md px-4 font-body text-base text-white focus:border-green-500"
            textAlignVertical="top"
            placeholderTextColor={colors.gray[400]}
            {...rest}
        />
    )
}
