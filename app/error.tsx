'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
            <h2>Something went wrong!</h2>
            <Link href={'/'}>Home</Link>
        </div>
    )
}
