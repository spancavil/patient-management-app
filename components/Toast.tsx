import React, { useEffect } from 'react'

type Props = {
    message: string
    closeToast: () => void
    nextStep?: () => void
}

const Toast = ({ message, closeToast, nextStep = () => {} }: Props) => {
    useEffect(() => {
        setTimeout(() => {
            closeToast()
            nextStep()
        }, 3400)
    }, [closeToast, nextStep])
    return (
        <div
            className="animate-fadeinout bg-black fixed z-20 left-1/2 bottom-[30px] w-[200px] sm:w-[400px] ml-[-100px] sm:ml-[-200px] p-7 rounded-lg cursor-pointer"
            onClick={() => closeToast()}
        >
            <h1 className="text-white text-center">{message}</h1>
        </div>
    )
}

export default Toast
