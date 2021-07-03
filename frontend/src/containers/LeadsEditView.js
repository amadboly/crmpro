import React from 'react';
import EditLead from '../components/LeadsEdit';
import axios from 'axios';


class LeadEditView extends React.Component{
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
                <EditLead data={this.state.leaddata}/>
            </div>
        );
    };
    
}

export default LeadEditView;