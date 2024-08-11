import { Patient } from '@/interfaces/patient'
import { Reducer } from 'react'
import { Actions, ActionTypes } from '../actions'

export type State = { patients: Patient[] }

export const initialState: State = {
    patients: [],
}

export const reducer: Reducer<State, Actions> = (
    state: State,
    actions: Actions
) => {
    switch (actions.type) {
        case ActionTypes.SAVE_ALL_PATIENTS: {
            return { ...state, patients: actions.payload.patients }
        }

        case ActionTypes.ADD_PATIENT: {
            //Get the id from the last and add 1
            const id = (
                Number(state.patients[state.patients.length - 1].id) + 1
            ).toString()
            const patientToAdd: Patient = {
                ...actions.payload.patient,
                id,
                createdAt: new Date().toLocaleDateString(),
                avatar: '',
            }
            const stateUpdated = { ...state }
            stateUpdated.patients.push(patientToAdd)
            return stateUpdated
        }
        case ActionTypes.EDIT_PATIENT: {
            const patientsUpdated = state.patients.map((patient) => {
                if (patient.id === actions.payload.patient.id)
                    return actions.payload.patient
                return patient
            })
            const stateUpdated = { ...state }
            stateUpdated.patients = patientsUpdated
            return stateUpdated
        }
        default:
            return state
    }
}
