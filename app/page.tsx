import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center sm:p-24 p-7 gap-5 sm:gap-9">
            <h2 className="text-xl sm:text-3xl">
                Welcome to patients data management app
            </h2>
            <Link href={'/patients'}>
                <Image
                    height={'80'}
                    width={'80'}
                    className="h-10 w-10 sm:h-16 sm:w-16"
                    src={'/next.svg'}
                    alt="next-step"
                />
            </Link>
        </main>
    )
}
