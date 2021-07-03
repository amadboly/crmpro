import React from 'react';
import NestedTable from '../components/Customerview';
import axios from 'axios';


class CustomerListview extends React.Component{
    state ={
        customerdata:[]
    }

    componentDidMount(){

        axios
            .get('/customer/')
            .then(res=>{
                this.setState({
                    customerdata:res.data
                });
            //console.log(res.data);
            
            })
            .catch((err) => console.log(err));
    }
    
    
    
    render(){
        return(
            <div>
                <h1 style={{color:'green',fontSize:'40px'}}>Customers List</h1>
                <NestedTable data={this.state.customerdata}/>
            </div>
        );
    };
    
}

export default CustomerListview;
