'use client'
import { AppContextProvider } from '@/context/appContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <AppContextProvider>{children}</AppContextProvider>
}

export default Providers
