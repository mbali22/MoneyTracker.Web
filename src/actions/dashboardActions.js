import * as types from "./constants";
import { getDashboardInfo } from '../api/dashboard';



export function loadDashboardRecordsSuccess(dashboardInfo){
    return {
        type:types.LOAD_DASHBOARDINFO_SUCCESS,
        dashboardInfo
    };
}

export function loadDashboardInfo(){
    return function(dispatch){
        return  getDashboardInfo().then(dashBoardInfo => {
            dispatch(loadDashboardRecordsSuccess(dashBoardInfo.data));
        }).catch(err => {
            throw err;
        });
    };
}