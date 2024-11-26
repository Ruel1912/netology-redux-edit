import { CHANGE_SERVICE_FIELD } from '../actions/actions'

const initialState = { id: 0, name: '', price: '' }

export default function serviceAddReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    }
    default:
      return state
  }
}
