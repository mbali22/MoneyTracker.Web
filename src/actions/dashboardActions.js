import * as types from "./constants";
import { getDashboardInfo } from '../api/dashboard';



export function loadDashboardRecordsSuccess(dashBoradInfo){
    return {
        type:types.LOAD_DASHBOARDINFO_SUCCESS,
        dashBoradInfo
    };
}

export function loadDashboardInfo(){
    return function(dispatch){
        return  getDashboardInfo().then(dashBoardInfo => {
            dispatch(loadDashboardRecordsSuccess(dashBoardInfo));
        }).catch(err => {
            throw err;
        });
    };
}