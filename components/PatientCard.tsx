import { Patient } from '@/interfaces/patient'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

type Props = {
    patient: Patient
}

const PatientCard = ({ patient }: Props) => {
    return (
        <div className="sm:w-[300px] w-[160px] h-[280px] sm:h-[420px] bg-slate-300 flex flex-col justify-start items-center shadow-xl rounded-lg overflow-hidden sm:hover:translate-y-[-10px] sm:translate-ease-in-out sm:duration-300 relative">
            <Image
                height={80}
                width={80}
                className="w-full bg-cover"
                alt={`patient-${patient.id}`}
                src={patient.avatar || '/default-user.png'}
            />
            <h1 className="sm:text-2xl text-lg text-center">{patient.name}</h1>
            <Link
                href={`/patients/${patient.id}`}
                className="w-full flex justify-center absolute bottom-0 pb-2"
            >
                <Button
                    title="VIEW"
                    textSize="sm:text-lg text-sm"
                    width="w-[120px] sm:w-[180px]"
                />
            </Link>
        </div>
    )
}

export default PatientCard
