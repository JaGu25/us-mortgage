import { types } from '../types'
import * as React from 'react'
import { form } from './interfaces';

const reducer: React.Reducer<any, any> = (state, action) => {
  switch (action.type) {
    case types.FORM_UDPATE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value
        }
      }
    case types.FORM_RESET:
      return {
        form
      }
    default:
      return state
  }
}

export default reducer
