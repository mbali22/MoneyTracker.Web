
const api_Url = "http://localhost:3005/";
import axios from 'axios';

export function getDashboardInfo(personId) {
    return new Promise((resolve, reject) => {
        let dashboardUrl = api_Url + "transactions/19184dd0-ea95-11e8-a98f-c5921e6344b7";
        axios.get(dashboardUrl)
            .then(data => {
                resolve(data);
            }).catch(err => {
                reject(err); 
            });
    });
}


