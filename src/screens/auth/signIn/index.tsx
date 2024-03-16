import { useNavigation } from '@react-navigation/native'

import { AuthLayout } from '@/layouts/AuthLayout'
import { Input } from '@/components/Input'

import { AuthNavigatorRoutesProps } from '@/types/AuthRoutes'

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount() {
        navigation.navigate('signUp')
    }

    return (
        <AuthLayout
            title="Acesse sua conta"
            buttonPrimaryText="Acessar"
            buttonSecoondaryText="Criar conta"
            onPressSecondary={handleNewAccount}
        >
            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
            <Input placeholder="Senha" secureTextEntry />
        </AuthLayout>
    )
}
