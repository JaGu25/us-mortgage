import { types } from '../types'
import * as React from 'react'

const reducer: React.Reducer<any, any> = (state, action) => {
  switch (action.type) {
    case types.FORM_UDPATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    default:
      return state
  }
}

export default reducer
