import { createContext, useReducer } from 'react'
import { Actions } from './actions'
import { initialState, reducer, State } from './reducer'

// Define the type for our context data
type AppContextType = {
    state: State
    dispatch: React.Dispatch<Actions>
}

// Create the context with an initial value of null
export const AppContext = createContext<AppContextType | null>(null)

// Define the props type for the context provider component
type ContextProviderProps = {
    children: React.ReactNode
}

export function AppContextProvider({ children }: ContextProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
