import { SET_BIO, SET_READY_STATE } from '../actions/types'

const initialState = {
    bio: {},
    ready: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BIO:
            return {
                ...state,
                bio: action.payload
            }
        case SET_READY_STATE:
            return {
                ...state,
                ready: true
            }
        default:
            return state
    }
}