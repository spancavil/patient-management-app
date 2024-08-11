type Props = {
    children?: React.ReactNode
}

const ModalLayout = ({ children }: Props) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(1,1,1,0.55)] z-10 flex justify-center items-center overflow-y-hidden">
            <div className="relative bg-slate-100 sm:w-[90%] sm:h-[90%] w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default ModalLayout
