import * as types from "./constants";



export function loadDashboardRecordsSuccess(dashBoradInfo){
    return {
        type:types.LOAD_DASHBOARDINFO_SUCCESS,
        dashBoradInfo
    }
}


export function loadDashboardInfo(){
    return function(dispatch){
        //return 
    }

}