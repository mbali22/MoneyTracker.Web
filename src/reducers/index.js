import {combineReducers} from 'redux';
import dashboard from './dashboardReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    dashboardInfo:dashboard
});
export default rootReducer;