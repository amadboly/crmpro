import React from 'react';
import NewLeads from '../components/LeadsNew';

class LeadsNewForm extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{color:'gray',fontSize:'40px',marginInline:'40%'}}>New Lead</h1>
                <br />
                <NewLeads/>
            </div>
        );
    };
}
export default LeadsNewForm;