import { Box, VStack, Text } from '@gluestack-ui/themed'

export function Signin() {
    return (
        <Box backgroundColor="$blue500" flex={1} px="$8" py="$2.5">
            <VStack flex={1}>
                <Text textTransform="capitalize" color="$pink300">
                    algo nessa tela
                </Text>
            </VStack>
        </Box>
    )
}
