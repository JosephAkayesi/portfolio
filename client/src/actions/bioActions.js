import { SET_BIO } from './types'
import axios from 'axios'

// Set bio
export const setBio = async () => dispatch => {
    await axios.get('/api/bio')
        .then(res => dispatch({
            type: SET_BIO,
            payload: res.data[0]
        }))
        .catch(err => console.log(err))
}