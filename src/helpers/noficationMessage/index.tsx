import { showMessage as showFlashMessage, FlashMessageProps } from 'react-native-flash-message'

interface Props extends FlashMessageProps {
  type: 'success' | 'warning' | 'danger' | 'info' | 'default'
  message: string
  duration?: number
}

export const noficationMessage = ({ type, message, duration = 2500, ...rest }: Props) => {
  // "success" (green), "warning" (orange), "danger" (red), "info" (blue) and "default" (gray).
  showFlashMessage({
    type,
    message,
    duration,
    hideStatusBar: true,
    animationDuration: 250,
    ...rest
  })
}
