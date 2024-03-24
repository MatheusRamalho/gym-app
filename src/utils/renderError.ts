import { AppError } from '@/utils/appError'

export function renderError(error: Error, alternativeMessage: string) {
    const isAppError = error instanceof AppError
    const message = isAppError ? error.message : alternativeMessage

    alert(message)
}
