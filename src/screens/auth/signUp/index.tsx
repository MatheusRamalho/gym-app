/* eslint-disable camelcase */
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { AuthLayout } from '@/layouts/AuthLayout'

import { Input } from '@/components/Input'

import { AuthNavigatorRoutesProps } from '@/types/AuthRoutes'

const signUpSchema = zod
    .object({
        name: zod.string({ required_error: 'Informe o nome.' }),
        email: zod.string().email({ message: 'E-mail invalido.' }),
        password: zod
            .string({ required_error: 'Informe a senha.' })
            .min(6, 'A senha deve conter pelo menos 6 dígitos.'),
        password_confirm: zod
            .string({ required_error: 'Confirme a senha.' })
            .min(6, 'A confirmação de senha deve conter pelo menos 6 dígitos.'),
    })
    .refine(({ password, password_confirm }) => password === password_confirm, {
        message: 'A confirmação da senha não confere.',
        path: ['password_confirm'],
    })

type SignUpSchemaData = zod.infer<typeof signUpSchema>

export function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaData>({
        resolver: zodResolver(signUpSchema),
        // defaultValues: {
        //     name: '',
        //     email: '',
        //     password: '',
        //     password_confirm: '',
        // },
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
                    <Input
                        placeholder="Nome"
                        value={value}
                        onChangeText={onChange}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name && errors.name.message}
                    />
                )}
            />

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
                        isInvalid={!!errors.email}
                        errorMessage={errors.email && errors.email.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => (
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                        isInvalid={!!errors.password}
                        errorMessage={errors.password && errors.password.message}
                    />
                )}
            />

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
                        isInvalid={!!errors.password_confirm}
                        errorMessage={errors.password_confirm && errors.password_confirm.message}
                    />
                )}
            />
        </AuthLayout>
    )
}
