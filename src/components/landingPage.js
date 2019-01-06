import React from 'react';
import Tabs from './common/Tabs';



class LandingPage extends React.Component{

    render(){
        return(            
            <div className="lpContainer">
                <div className="dashboardHeading">
                    <h3>Dashboard</h3>
                </div>
                <div className="creddebContainer">
                    {/* <h5>Credits/Debits</h5> */}
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
            </div>
        );
    }
}

export default LandingPage;


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