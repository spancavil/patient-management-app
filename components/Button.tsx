'use client'

type Props = {
    title: string
    onClick?: () => void
    width?: string
    bgColor?: string
    textColor?: string
    textSize?: string
}

const Button = ({
    bgColor = 'bg-slate-100',
    title,
    width = 'w-[200px]',
    onClick = () => {},
    textColor = '',
    textSize = 'text-lg',
}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`${bgColor} ${width} ${textColor} ${textSize} p-4 rounded-md text-center text-slate-950 cursor-pointer`}
        >
            {title}
        </button>
    )
}

export default Button
