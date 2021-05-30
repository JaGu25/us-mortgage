import React, { useReducer } from 'react'
import FormReducer from './formReducer'
import { types } from '../types'
import { IFormObject, initialForm } from './interfaces';

interface Props {
    children: React.ReactNode
}

const form: IFormObject = localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form') ?? '{}') : null

const initialState: IFormObject = form || initialForm;

interface IForm {
    form: IFormObject,
    updateForm: (fields: any) => void,
    resetForm: () => void,
}

export const FormContext = React.createContext<IForm>({
    form: initialState,
    updateForm: () => { },
    resetForm: () => { },
})

const FormProvider = ({ children }: Props): any => {

    const [state, dispatch] = useReducer(FormReducer, initialState)

    const updateForm = (field: any): void => {
        dispatch({
            type: types.FORM_UDPATE_FIELD,
            payload: field
        })
    }

    const resetForm = (): void => {
        dispatch({
            type: types.FORM_RESET,
        })
    }

    return (
        <FormContext.Provider
            value={{
                form: state,
                updateForm,
                resetForm
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider
