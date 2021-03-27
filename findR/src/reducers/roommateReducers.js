import {
    ROOMMATE_LIST_REQUEST,
    ROOMMATE_LIST_SUCCESS,
    ROOMMATE_LIST_FAIL,
} from '../constants/roommateConstants.js'

export const roommateListReducer = (state = { roommates: [] }, action) => {
    switch (Selection.type) {
        case ROOMMATE_LIST_REQUEST:
            return {loading: true, roommates: []}

        case ROOMMATE_LIST_SUCCESS:
            return {loading: false, roommates: action.payload}

        case ROOMMATE_LIST_FAIL:
            return { loading: false, error: action.payload}
        
        default:
            return state
    }
}