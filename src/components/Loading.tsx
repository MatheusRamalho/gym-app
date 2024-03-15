import { Center, Spinner } from '@gluestack-ui/themed'

export function Loading() {
    return (
        <Center bg="$blue500" h={200} w={300}>
            <Spinner color="black" />
        </Center>
    )
}
