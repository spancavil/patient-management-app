import React from 'react'
import Loader from '../components/Loader'

type Props = {}

const Loading = (props: Props) => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <Loader />
        </div>
    )
}

export default Loading
