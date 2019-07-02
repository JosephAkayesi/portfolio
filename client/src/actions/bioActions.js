import { SET_BIO, SET_READY_STATE } from './types'
import axios from 'axios'

// Set bio
export const setBio = () => dispatch => {
    console.log('should set')
    axios.get('/api/bio')
        .then(res => dispatch({
            type: SET_BIO,
            payload: res.data[0]
        }))
        .then(() =>  dispatch(changeReadyState()))
        .catch(err => console.log(err))
}

// Change ready state
export const changeReadyState = () => {
    return {
        type: SET_READY_STATE
    }
}
