import React from 'react';
import NestedTable from '../components/Contactsview';
import axios from 'axios';


class ContactsListview extends React.Component{
    state ={
        contactsdata:[]
    }

    componentDidMount(){

        axios
            .get('/contacts/')
            .then(res=>{
                this.setState({
                    contactsdata:res.data
                });
            //console.log(res.data);

            })
            .catch((err) => console.log(err));
    }
    
    render(){
        return(
            <div>
                <h1 style={{color:'green',fontSize:'40px'}}>Contacts List</h1>
                <NestedTable data={this.state.contactsdata}/>
            </div>
        );
    };

}

export default ContactsListview;
