import React from 'react';
import NewCustomer from '../components/CustomerNew';

class CustomerNewForm extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{color:'gray',fontSize:'40px',marginInline:'40%'}}>New Customer</h1>
                <br />
                <NewCustomer/>
            </div>
        );
    };
}
export default CustomerNewForm;