import { SET_BIO } from '../actions/types'

const initialState = {
    bio: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BIO:
            return {
                ...state,
                bio: action.payload
            }
        default:
            return state
    }
}