import intialState from './initialState';
import * as types from '../actions/constants'

export default function dashboardReducer(state= intialState.dashboardInfo,action){
    switch (action.type) {
        case types.LOAD_DASHBOARDINFO_SUCCESS :
        return action.dashboardInfo;
    
        default:
            return state;
    }

}