import {
    ROOMMATE_LIST_REQUEST,
    ROOMMATE_LIST_SUCCESS,
    ROOMMATE_LIST_FAIL,
} from '../constants/roommateConstants.js'

import axios from 'axios'

export const listRoommates = () => async(dispatch) => {
    try {
        dispatch({ type: ROOMMATE_LIST_REQUEST })

        const { data } = await axios.get('/api/roommates')

        dispatch({
            type: ROOMMATE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ROOMMATE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}