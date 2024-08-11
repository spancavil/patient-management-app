import { Patient } from '@/interfaces/patient'

export enum ActionTypes {
    SAVE_ALL_PATIENTS = 'save_all_patients',
    ADD_PATIENT = 'add_patient',
    EDIT_PATIENT = 'edit_patient',
}

export type SaveAllPatientsActions = {
    type: ActionTypes.SAVE_ALL_PATIENTS
    payload: {
        patients: Patient[]
    }
}

export type AddPatientAction = {
    type: ActionTypes.ADD_PATIENT
    payload: {
        patient: Omit<Patient, 'createdAt' | 'id' | 'avatar'>
    }
}

export type EditPatientAction = {
    type: ActionTypes.EDIT_PATIENT
    payload: {
        patient: Patient
    }
}

export type Actions =
    | SaveAllPatientsActions
    | AddPatientAction
    | EditPatientAction
