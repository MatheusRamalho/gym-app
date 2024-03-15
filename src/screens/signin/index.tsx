import { Box, VStack, Text, Center, Image } from '@gluestack-ui/themed'

import LogoSvg from '@/assets/svgs/logo.svg'
import BackgroundImg from '@/assets/imgs/background.png'

export function Signin() {
    return (
        <Box backgroundColor="$gray700" flex={1} px="$8" py="$2.5">
            <VStack flex={1} px={10} pb={16}>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />

                <Center my={24}>
                    <LogoSvg />

                    <Text fontSize="$sm">Treine sua mente e o seu corpo.</Text>
                </Center>
            </VStack>
        </Box>
    )
}
