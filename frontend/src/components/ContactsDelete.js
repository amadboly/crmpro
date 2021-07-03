import React from 'react';
import {Form,Button,Input}from 'antd';
import axios from 'axios';
import {withRouter} from 'react-router';

const FormItem = Form.Item;
class DeleteContact extends React.Component{

  handleFormSubmit = (event)=>{
    const ContactID=this.props.data.id;
    event.preventDefault();
    axios.delete(`/contacts/${ContactID}/`)
    .then(res => console.log(res))
    .catch(err=>console.log(err));
    this.props.history.push('/contacts');
    this.forceUpdate();
  }
  render(){
    if (this.props.data.jobtitle !== undefined){
      return(
        <div>
          <form onSubmit={this.handleFormSubmit}>
              <FormItem><h3 style={{color:'white'}}>Job Title</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.jobtitle} maxLength='10'
                name ='jobtitle' readOnly={true}
                style={{color:'gray',
                height:'50px',width:'98%',fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Title</h3></FormItem>
              <FormItem>
              <select maxLength='10' name='title'
              style={{color:'gray',width:'98%',height:'50px'
                              ,backgroundColor:'#282c34'
                              ,fontSize:'20px'
                              }}>
                <option value={this.props.data.title}>{this.props.data.title}</option>
              </select>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>First Name</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.fname} maxLength='10' name='fname'
                readOnly={true}
                style={{color:'gray',
                height:'50px',width:'98%',fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Last Name</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.lname} maxLength='10' name='lname'
                readOnly={true}
                style={{color:'gray',
                height:'50px',width:'98%',fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>E-mail</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.email} maxLength='30' required={true}
                type='email' name='email' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Cell Phone Number</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.mobileno} maxLength='15'
                type='number' name='mobileno' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Phone Number</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.phone} maxLength='15' required={true}
                type='number' name ='phone' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Fax Number</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.faxno} maxLength='15'
                type='number' name = 'faxno' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
            <FormItem>
              <Button type='danger' htmlType='submit'  style={{color:'White',
                width:'98%',height:'50px',fontSize:'30px'}}>
                  Delete
              </Button>
            </FormItem>
          </form>
        </div>
      );
    }
  else{
    this.jobtitled= this.props.data.jobtitle;
    return(<p>{console.log(this.jobtitled)}</p>);
  }
  }
}

export default withRouter(DeleteContact);
