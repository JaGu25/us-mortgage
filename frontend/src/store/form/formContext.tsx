import React, { useReducer } from 'react'
import FormReducer from './formReducer'
import { types } from '../types'
import { IFormObject, form } from './interfaces';

interface Props {
    children: React.ReactNode
}

interface IForm {
    form: IFormObject,
    updateForm: (fields: any) => void,
    resetForm: () => void,
}

export const FormContext = React.createContext<IForm>({
    form,
    updateForm: () => { },
    resetForm: () => { },
})

const FormProvider = ({ children }: Props): any => {

    const [state, dispatch] = useReducer(FormReducer, { form })

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
                form: state.form,
                updateForm,
                resetForm
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider
