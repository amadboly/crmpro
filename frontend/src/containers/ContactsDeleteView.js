import React from 'react';
import DeleteContact from '../components/ContactsDelete';
import axios from 'axios';


class ContactDeleteView extends React.Component{
    state ={
        contactdata:{}
    }

    componentDidMount(){
        const ContactID=this.props.match.params.ContactID;
        axios
            .get(`/contacts/${ContactID}`)
            .then(res=>{
                this.setState({
                    contactdata:res.data
                });
            console.log(res.data);

            })
            .catch((err) => console.log(err));
    }


    render(){

        return(
            <div>
                <DeleteContact data={this.state.contactdata}/>
            </div>
        );
    };

}

export default ContactDeleteView;
