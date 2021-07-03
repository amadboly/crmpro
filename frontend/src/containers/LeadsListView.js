import React from 'react';
//import NestedTable from '../components/Customerview';
import axios from 'axios';
import NestedTableLeads from '../components/Leadsview';


class LeadsListView extends React.Component{
    state ={
        leadsdata:[]
    }

    componentDidMount(){

        axios
            .get('/lead/')
            .then(res=>{
                this.setState({
                    leadsdata:res.data
                });
            //console.log(res.data);
            
            })
            .catch((err) => console.log(err));
    }
    
    
    
    render(){
        return(
            <div>
                <h1 style={{color:'green',fontSize:'40px'}}>Leads List</h1>
                <NestedTableLeads data={this.state.leadsdata}/>
            </div>
        );
    };
    
}

export default LeadsListView;
