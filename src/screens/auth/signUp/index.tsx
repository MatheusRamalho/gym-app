import { useNavigation } from '@react-navigation/native'

import { AuthLayout } from '@/layouts/AuthLayout'
import { Input } from '@/components/Input'

import { AuthNavigatorRoutesProps } from '@/types/AuthRoutes'

export function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <AuthLayout
            title="Crie sua conta"
            buttonPrimaryText="Criar e acessar"
            buttonSecoondaryText="Voltar para o login"
            onPressSecondary={handleGoBack}
        >
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirme a senha" secureTextEntry />
        </AuthLayout>
    )
}
