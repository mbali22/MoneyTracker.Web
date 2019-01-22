import React from 'react';
import Tabs from './common/Tabs';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as dashboardActions from "../actions/dashboardActions";
import Loading from "./common/loading";



class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.state =  {
            dashboardInfo:{}
        }
    }

    componentDidMount() {
        this.props.actions.loadDashboardInfo();     
        
    }    

    render(){     
        console.log('rendering ');
        let info = this.state.dashboardInfo;
        return(      
            (info && Object.keys(info).length === 0)?
            <Loading /> :
            <div className="lpContainer">
                <div className="dashboardHeading">
                    <h3>Dashboard</h3>
                </div>
                <div className="creddebContainer">
                    {/* <h5>Credits/Debits</h5> */}
                    <div className="lpbox">
                        <div className="boxlabel"><h5>Credits</h5></div>
                        <div>{info.board.credits}</div>
                    </div>
                    <div className="lpbox">
                        <div className="boxlabel"><h5>Debits</h5></div>
                        <div>{info.board.debits}</div>
                    </div>

                </div>
                <div className="expenseContainer">
                    <h5>Expense Tracker</h5>
                    <div className="lpbox">
                            {info.board.expense}                        
                    </div>
                </div>  
                <Tabs />              
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){    
    return {
        dashboardInfo: state.dashboardInfo
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(dashboardActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);


{/* <div className="lpContainer">
<div className="dashboardHeading">
    <h3>Dashboard</h3>
</div>
<div className="creddebContainer">
    <h5>Credits/Debits</h5>
    <div className="lpbox">

    </div>
    <div className="lpbox">

    </div>

</div>
<div className="expenseContainer">
    <h5>Expense Tracker</h5>
    <div className="lpbox">

    </div>
</div>  
<Tabs />              
</div> */}