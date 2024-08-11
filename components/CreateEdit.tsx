import { Patient } from '@/interfaces/patient'
import React, { useState } from 'react'
import Button from './Button'
import {
    maxLengthValidation,
    minLengthValidation,
    nonBlankNonEmptyValidation,
    webSiteFormatValidation,
} from '@/validations'
import {
    formDescriptionEmpty,
    formDescriptionMaxLength,
    formDescriptionMinLength,
    formNameEmpty,
    formWebSiteEmpty,
    formWebSiteFormat,
} from '@/constants/errors'
import {
    MAX_LENGTH_DESCRIPTION,
    MIN_LENGTH_DESCRIPTION,
} from '@/constants/forms'

type Props = {
    closeModal: () => void
    isCreate?: boolean
    isEdit?: boolean
    patient?: Patient
    onSave: (patient: Omit<Patient, 'id' | 'createdAt' | 'avatar'>) => void
}

/* 
id: string,
createdAt: Date | null,
name: string,
avatar: string,
description: string,
webSite:string, 
*/

const CreateEdit = ({
    isCreate,
    isEdit,
    patient,
    closeModal,
    onSave,
}: Props) => {
    const [form, setForm] = useState({
        id: patient?.id,
        createdAt: patient?.createdAt,
        name: patient?.name || '',
        description: patient?.description || '',
        website: patient?.website || '',
    })

    const initialError = {
        name: '',
        description: '',
        website: '',
    }

    const [error, setError] = useState(initialError)

    const handleSave = () => {
        let error = { name: '', avatar: '', description: '', website: '' }
        const isValidName = nonBlankNonEmptyValidation(form.name)
        if (!isValidName) error = { ...error, name: formNameEmpty }
        const isValidDescription = nonBlankNonEmptyValidation(form.description)
        if (!isValidDescription)
            error = { ...error, description: formDescriptionEmpty }
        const isValidMaxLengthDescription = maxLengthValidation(
            MAX_LENGTH_DESCRIPTION,
            form.description
        )
        if (!isValidMaxLengthDescription)
            error = {
                ...error,
                description: formDescriptionMaxLength(MAX_LENGTH_DESCRIPTION),
            }
        const isValidMinlengthDescription = minLengthValidation(
            MIN_LENGTH_DESCRIPTION,
            form.description
        )
        if (!isValidMinlengthDescription)
            error = {
                ...error,
                description: formDescriptionMinLength(MIN_LENGTH_DESCRIPTION),
            }
        const isValidWebSiteEmpty = nonBlankNonEmptyValidation(form.website)
        if (!isValidWebSiteEmpty)
            error = { ...error, website: formWebSiteEmpty }
        const isValidWebSiteFormat = webSiteFormatValidation(form.website)
        if (!isValidWebSiteFormat)
            error = { ...error, website: formWebSiteFormat }
        setError(error)
        for (const errorValue of Object.values(error)) {
            if (errorValue) return
        }
        onSave({
            ...form,
        })
    }

    return (
        <div className="w-full h-full flex flex-col justify-start items-start p-4 sm:px-40 sm:py-6">
            <h1 className="text-slate-800 sm:text-3xl text-xl mb-4">
                {isCreate ? 'Register' : 'Edit'} patient
            </h1>
            {isEdit && (
                <div className="flex flex-row justify-start items-center gap-5">
                    <div className="flex flex-col justify-start items-start">
                        <label className="text-slate-800 mb-2 block sm:text-md text-sm">
                            ID
                        </label>
                        <input
                            value={form.id}
                            disabled
                            className="p-3 rounded block mb-2 bg-violet-600 text-white w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label className="text-slate-800 mb-2 block sm:text-md text-sm">
                            Created At
                        </label>
                        <input
                            value={form.createdAt}
                            disabled
                            className="p-3 rounded block mb-2 bg-violet-600 text-white w-full focus:outline-none"
                        />
                    </div>
                </div>
            )}
            <label className="text-slate-800 mb-2 block sm:text-md text-sm">
                Name
            </label>
            <input
                className="p-3 rounded block mb-2 bg-violet-600 text-white w-full focus:outline-none"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
            />
            {error.name && (
                <span className="text-red-500 text-sm italic">
                    {error.name}
                </span>
            )}
            <label className="text-slate-800 mb-2 block sm:text-md text-sm">
                Description
            </label>
            <textarea
                onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                }
                value={form.description}
                rows={5}
                className="p-3 rounded block mb-2 bg-violet-600 text-white w-full focus:outline-none"
            />
            {error.description && (
                <span className="text-red-500 text-sm italic">
                    {error.description}
                </span>
            )}
            <label className="text-slate-800 mb-2 block sm:text-md text-sm">
                Website
            </label>
            <input
                className="p-3 rounded block mb-2 bg-violet-600 text-white w-full focus:outline-none"
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                value={form.website}
            />
            {error.website && (
                <span className="text-red-500 text-sm italic">
                    {error.website}
                </span>
            )}
            <div className="w-full flex flex-col sm:flex-row justify-end items-center gap-6 mt-6">
                <Button
                    title="CLOSE"
                    bgColor="bg-slate-200"
                    onClick={closeModal}
                    textSize="sm:text-xl text-lg"
                    textColor="text-slate-800"
                    width="w-full sm:w-[200px]"
                />
                <Button
                    title="SAVE"
                    bgColor="bg-violet-800"
                    onClick={handleSave}
                    textSize="sm:text-xl text-lg"
                    textColor="text-slate-200"
                    width="w-full sm:w-[200px]"
                />
            </div>
        </div>
    )
}

export default CreateEdit
