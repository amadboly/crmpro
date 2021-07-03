import React from 'react';
import EditContacts from '../components/ContactsEdit';
import axios from 'axios';


class ContactsEditView extends React.Component{
    state ={
        contactsdata:{}
    }

    componentDidMount(){
        const ContactID=this.props.match.params.ContactID;
        axios
            .get(`/contacts/${ContactID}/`)
            .then(res=>{
                this.setState({
                    contactsdata:res.data
                });
            console.log(res.data);

            })
            .catch((err) => console.log(err));
    }


    render(){

        return(
            <div>
                <EditContacts data={this.state.contactsdata}/>
            </div>
        );
    };

}

export default ContactsEditView;
