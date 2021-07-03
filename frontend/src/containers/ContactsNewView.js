import React from 'react';
import NewContact from '../components/ContactNew';

class ContactsNewForm extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{color:'gray',fontSize:'40px',marginInline:'40%'}}>New Contact</h1>
                <br />
                <NewContact/>
            </div>
        );
    };
}
export default ContactsNewForm;
