'use client'
import Button from '@/components/Button'
import CreateEdit from '@/components/CreateEdit'
import Loader from '@/components/Loader'
import ModalLayout from '@/components/ModalLayout'
import PatientCard from '@/components/PatientCard'
import Toast from '@/components/Toast'
import { ActionTypes } from '@/context/actions'
import { useAppContext } from '@/context/useAppContext'
import { Patient } from '@/interfaces/patient'
import { getPatients } from '@/services/getPatients'
import { useEffect, useState } from 'react'

const Patients = () => {
    const { state, dispatch } = useAppContext()
    const [modalAddUser, setModaluser] = useState(false)
    const [toast, setToast] = useState(false)

    useEffect(() => {
        //Only fetch when there are no patients
        if (!state.patients.length) {
            ;(async () => {
                try {
                    const patients = await getPatients()
                    dispatch({
                        type: ActionTypes.SAVE_ALL_PATIENTS,
                        payload: { patients },
                    })
                } catch (error) {
                    throw new Error('error on fetch client')
                }
            })()
        }
    }, [dispatch, state.patients.length])

    useEffect(() => {
        if (document) {
            document.body.style.overflow = modalAddUser ? 'hidden' : 'auto'
        }
    }, [modalAddUser])

    const handleSave = (
        patient: Omit<Patient, 'id' | 'createdAt' | 'avatar'>
    ) => {
        dispatch({
            type: ActionTypes.ADD_PATIENT,
            payload: { patient: patient },
        })
        setToast(true)
    }

    return !state.patients.length ? (
        <div className="flex items-center justify-center h-screen w-screen">
            <Loader />
        </div>
    ) : (
        <div className="flex flex-col items-center justify-start p-6">
            <Button
                onClick={() => setModaluser(true)}
                title="REGISTER PATIENT"
                width="w-[100%]"
                bgColor="bg-slate-950"
                textColor="text-white"
                textSize="text-xl sm:text-2xl"
            />
            <div className="flex flex-row flex-wrap justify-between items-center gap-3 sm:gap-6 py-6">
                {state.patients.map((patient) => {
                    return <PatientCard patient={patient} key={patient.id} />
                })}
            </div>
            {modalAddUser && (
                <ModalLayout>
                    <CreateEdit
                        isCreate={true}
                        closeModal={() => setModaluser(false)}
                        onSave={handleSave}
                    />
                </ModalLayout>
            )}
            {toast && (
                <Toast
                    message="Patient registered successfully"
                    closeToast={() => setToast(false)}
                    nextStep={() => setModaluser(false)}
                />
            )}
        </div>
    )
}

export default Patients
