import React from 'react';
import DeleteLead  from '../components/LeadsDelete';
import axios from 'axios';


class LeadDeleteView extends React.Component{
    state ={
        leaddata:{}
    }

    componentDidMount(){
        const LeadID=this.props.match.params.LeadID;
        axios
            .get(`/lead/${LeadID}/`)
            .then(res=>{
                this.setState({
                    leaddata:res.data
                });
            console.log(res.data);
            
            })
            .catch((err) => console.log(err));
    }
    
    
    render(){
        
        return(
            <div>
                <DeleteLead data={this.state.leaddata}/>
            </div>
        );
    };
    
}

export default LeadDeleteView;
