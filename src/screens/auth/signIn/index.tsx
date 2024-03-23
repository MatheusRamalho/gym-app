import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useAuth } from '@/hooks/useAuth'
import { AuthLayout } from '@/layouts/AuthLayout'
import { Input } from '@/components/Input'
import { AuthNavigatorRoutesProps } from '@/types/AuthRoutes'
import { Button, View } from 'react-native'

const signInSchema = zod.object({
    email: zod.string().email({ message: 'E-mail invalido.' }),
    password: zod.string({ required_error: 'Informe a senha.' }).min(6, 'A senha deve conter pelo menos 6 dígitos.'),
})

type SignInSchemaData = zod.infer<typeof signInSchema>

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()
    const { signIn, isLoading: isLoadingUser } = useAuth()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchemaData>({
        resolver: zodResolver(signInSchema),
    })

    function handleNewAccount() {
        navigation.navigate('signUp')
    }

    async function handleSignIng({ email, password }: SignInSchemaData) {
        await signIn(email, password)
    }

    return (
        <AuthLayout title="Acesse sua conta" buttonSecoondaryText="Criar conta" onPressSecondary={handleNewAccount}>
            <View className="">
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
            </View>

            <Button
                disabled={isLoadingUser}
                title={isLoadingUser ? 'Carregando...' : 'Acessar'}
                onPress={handleSubmit(handleSignIng)}
            />
        </AuthLayout>
    )
}
