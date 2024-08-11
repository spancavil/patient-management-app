import { Patient } from '@/interfaces/patient'

export const getPatients = async (): Promise<Patient[]> => {
    try {
        const BASE_API_USERS = process.env.NEXT_PUBLIC_BASE_API_USERS as string
        const response = await fetch(BASE_API_USERS)
        const patients: Patient[] = await response.json()
        return patients
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching data')
    }
}
