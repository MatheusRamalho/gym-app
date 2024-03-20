import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'

import { AuthLayout } from '@/layouts/AuthLayout'
import { Input } from '@/components/Input'

import { AuthNavigatorRoutesProps } from '@/types/AuthRoutes'
import { Text } from 'react-native'

// const signUpSchema = zod.object({
//     name: zod.string().nonempty('O nome da cidade é obrigatório'),
//     email: zod.string().email().nonempty('O nome do bairro é obrigatório'),
//     password: zod.string().nonempty('O nome da cidade é obrigatório'),
//     password_confirm: zod.string().nonempty('O nome da cidade é obrigatório'),
// })

// type SignUpSchemaData = zod.infer<typeof addressSchema>

interface SignUpSchemaData {
    name: string
    email: string
    password: string
    password_confirm: string
}

export function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaData>({
        // resolver: zodResolver(addressSchema),
        // defaultValues: formData,
    })

    function handleSignUp(data: SignUpSchemaData) {
        console.log(data)
    }

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <AuthLayout
            title="Crie sua conta"
            buttonPrimaryText="Criar e acessar"
            buttonSecoondaryText="Voltar para o login"
            onPressPrimary={handleSubmit(handleSignUp)}
            onPressSecondary={handleGoBack}
        >
            <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange } }) => (
                    <Input placeholder="Nome" value={value} onChangeText={onChange} />
                )}
            />
            {errors.name && <Text className="text-red-500 text-sm"> O nome é obrigatório! </Text>}

            <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            {errors.email && <Text className="text-red-500 text-sm"> O e-mail é obrigatório! </Text>}

            <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => (
                    <Input placeholder="Senha" secureTextEntry value={value} onChangeText={onChange} />
                )}
            />
            {errors.password && <Text className="text-red-500 text-sm"> A senha é obrigatória! </Text>}

            <Controller
                control={control}
                name="password_confirm"
                render={({ field: { value, onChange } }) => (
                    <Input
                        placeholder="Confirme a senha"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                        onSubmitEditing={handleSubmit(handleSignUp)}
                        returnKeyType="send"
                    />
                )}
            />

            {errors.password_confirm && (
                <Text className="text-red-500 text-sm">
                    A confirmação de senha é obrigatória e deve ser igual a senha!
                </Text>
            )}
        </AuthLayout>
    )
}
