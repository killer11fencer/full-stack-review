const initialState = {
    user_id: null,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    balance: null,
    authenticated: false
}

const UPDATE_USER_ID = 'UPDATE_USER_ID'
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_DETAILS = 'UPDATE_DETAILS'

export function updateUserId(id) {
    return {
        type: UPDATE_USER_ID,
        payload: id
    }


}
export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updateUserDetails(obj) {
    return {type: UPDATE_DETAILS,
    payload: obj
    }
}

export default function reducer(state = initialState,action) {
    const {type,payload} = action
    switch(type) {
        case UPDATE_USER_ID:
        return {...state,user_id: payload}
        case UPDATE_USERNAME:
        return {...state, username:payload}
        case UPDATE_DETAILS:
        const {first_name,last_name,balance,email} = payload
        return {...state,first_name,last_name,balance,email}
        default:
        return state;
    }
}