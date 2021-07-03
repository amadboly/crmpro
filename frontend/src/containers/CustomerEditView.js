import React from 'react';
import EditCustomer from '../components/CustomerEdit';
import axios from 'axios';


class CustomerEditView extends React.Component{
    state ={
        customerdata:{}
    }

    componentDidMount(){
        const CustomerID=this.props.match.params.CustomerID;
        axios
            .get(`/customer/${CustomerID}`)
            .then(res=>{
                this.setState({
                    customerdata:res.data
                });
            console.log(res.data);
            
            })
            .catch((err) => console.log(err));
    }
    
    
    render(){
        
        return(
            <div>
                <EditCustomer data={this.state.customerdata}/>
            </div>
        );
    };
    
}

export default CustomerEditView;
