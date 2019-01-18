
const api_Url = "http://localhost:3005/";
import axios from 'axios';

export function getDashboardInfo(personId){
    let dashboardUrl = api_Url + "transactions/19184dd0-ea95-11e8-a98f-c5921e6344b7";
    axios.get(dashboardUrl)
         .then(data =>{
            return data;
         }).catch(err => {
             return err;
         });    
}


