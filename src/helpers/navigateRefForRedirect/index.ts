import { createRef } from 'react'

export const NavigationRef: React.RefObject<any> = createRef()

export const navigateRedirect = (routeName: string, params: any) => {
  NavigationRef.current?.navigate(routeName, params)
}
