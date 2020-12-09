import {UserActionTypes} from './user.types'

const INITIAL_STATE={
    currentuser:null
};
const userReducer = (state = INITIAL_STATE,action) => {
switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
        return{
            ...state,
            currentuser: action.payload
        }

    default:
        return state;

}
}

export default userReducer;