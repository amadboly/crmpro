import React from 'react';
import DeleteCustomer from '../components/CustomerDelete';
import axios from 'axios';


class CustomerDeleteView extends React.Component{
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
                <DeleteCustomer data={this.state.customerdata}/>
            </div>
        );
    };
    
}

export default CustomerDeleteView;
