'use client'
import Button from '@/components/Button'
import CreateEdit from '@/components/CreateEdit'
import ModalLayout from '@/components/ModalLayout'
import Toast from '@/components/Toast'
import { ActionTypes } from '@/context/actions'
import { useAppContext } from '@/context/useAppContext'
import { Patient } from '@/interfaces/patient'
import Image from 'next/image'
import Link from 'next/link'
import React, { useReducer, useState } from 'react'

type Props = {
    params: {
        id: string
    }
}

const PatientDetail = ({ params }: Props) => {
    const { state, dispatch } = useAppContext()
    const [modal, setModal] = useState(false)
    const [toast, setToast] = useState(false)

    const { id } = params
    const patient = state.patients.find(
        (patient) => patient.id === id
    ) as Patient

    if (!patient) throw new Error('No patient loaded')

    const handleSaveEdit = (
        patientParam: Omit<Patient, 'avatar' | 'id' | 'createdAt'>
    ) => {
        const patientToSave: Patient = {
            id: patient?.id,
            createdAt: patient?.createdAt,
            avatar: patient?.avatar,
            ...patientParam,
        }
        dispatch({
            type: ActionTypes.EDIT_PATIENT,
            payload: { patient: patientToSave },
        })
        setToast(true)
    }

    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[50px] sm:h-screen w-full justify-center items-center">
            <div className="h-[400px] relative w-full sm:w-1/3 rounded-lg overflow-hidden">
                <Image
                    src={patient?.avatar || '/default-user.png'}
                    alt=""
                    fill
                    className="sm:object-contain sm:object-top"
                />
            </div>
            <div className="sm:h-full sm:w-2/3 flex flex-col justify-center items-start p-3 gap-2 sm:p-6 sm:gap-4">
                <div className="flex justify-between sm:pr-10 items-center w-full">
                    <h1 className="text-2xl font-bold md:text-5xl text-white">
                        {patient?.name}
                    </h1>
                    <div className="hidden sm:flex justify-center items-center gap-5">
                        <Link href={'/patients'}>
                            <Button title="BACK" />
                        </Link>
                        <Button
                            title="EDIT"
                            onClick={() => setModal(true)}
                            bgColor="bg-slate-800"
                            textColor="text-white"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between items-start gap-3">
                    <h4 className="text-lg font-bold sm:text-2xl sm:font-bold text-white">
                        ID: {patient?.id}
                    </h4>
                    <h4 className="text-md sm:text-xl text-white">
                        Created at: {patient?.createdAt}
                    </h4>
                </div>
                <h3 className="sm:text-lg text-sm text-white py-5">
                    {patient?.description}
                </h3>
                <h4 className="text-lg font-bold sm:text-2xl text-white sm:font-bold">
                    {patient?.website}
                </h4>
                <div className="pt-6 flex flex-col gap-3 w-full sm:hidden">
                    <Button
                        title="EDIT"
                        onClick={() => setModal(true)}
                        bgColor="bg-slate-800"
                        textColor="text-white"
                        width="w-full"
                    />
                    <Link href={'/patients'}>
                        <Button title="BACK" width="w-full" />
                    </Link>
                </div>
            </div>
            {modal && (
                <ModalLayout>
                    <CreateEdit
                        closeModal={() => setModal(false)}
                        onSave={handleSaveEdit}
                        isEdit={true}
                        patient={patient}
                    />
                </ModalLayout>
            )}
            {toast && (
                <Toast
                    message="Patient edited successfully"
                    closeToast={() => setToast(false)}
                />
            )}
        </div>
    )
}

export default PatientDetail
