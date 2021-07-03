import React from 'react';
import {Form,Button,Input}from 'antd';
import axios from 'axios';
import {withRouter} from 'react-router';

const FormItem = Form.Item;
class EditCustomer extends React.Component{

  handleFormSubmit = (event)=>{
    const CustomerID=this.props.data.id;
    //console.log(CustomerID);
    //console.log(event);
    event.preventDefault();
    const company = event.target.elements.company.value;
    const compwebadd= event.target.elements.compwebadd.value;
    const annualrev = event.target.elements.annualrev.value;
    const noemployee = event.target.elements.noemployee.value;
    const industry = event.target.elements.industry.value;
    const phone = event.target.elements.phone.value;
    const faxno= event.target.elements.faxno.value;
    const address = event.target.elements.address.value;
    const city = event.target.elements.city.value;
    const state = event.target.elements.state.value;
    const country = event.target.elements.country.value;
    const postcode = event.target.elements.postcode.value;
    const jobtitle= event.target.elements.jobtitle.value;
    const title = event.target.elements.title.value;
    const fname = event.target.elements.fname.value;
    const lname= event.target.elements.lname.value;
    const email = event.target.elements.email.value;
    const mobileno = event.target.elements.mobileno.value;

    axios.put(`/customer/${CustomerID}/`,{
      company : company,
      compwebadd : compwebadd,
      annualrev : annualrev,
      noemployee : noemployee,
      industry : industry,
      phone : phone,
      faxno : faxno,
      address : address,
      city : city,
      state : state,
      country :country,
      postcode : postcode,
      jobtitle : jobtitle,
      title : title,
      fname :fname,
      lname : lname,
      email : email,
      mobileno : mobileno
    })
    .then(res => console.log(res))
    .catch(err=>console.log(err));
    this.props.history.push('/customers');
    this.forceUpdate();
  }
  render(){
    if (this.props.data.company !== undefined){
      return( 
        <div>
          <form onSubmit={this.handleFormSubmit}>
          <FormItem><h2 style={{color:'#9a9ae6',
          fontWeight:'bolder',fontFamily:'fantasy',fontSize:'30px'}}>
            {this.props.data.company} Company Info</h2>
            </FormItem>
            <FormItem>
              <h3 style={{color:'white'}}>Company Name</h3>
            </FormItem>
              
              <FormItem>
                <Input  maxLength='15'
                required={true} name='company' type='text' 
                defaultValue={this.props.data.company}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }} />
              </FormItem>
              
              <FormItem><h3 style={{color:'white'}}>Company Web URL</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.compwebadd} maxLength='30' required={true}
                type='url' name='compwebadd'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Annual Revenue</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.annualrev} maxLength='15' type='number'
                name='annualrev'
                style={{color:'gray',
                height:'50px',width:'98%',fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
            
              <FormItem><h3 style={{color:'white'}}>Number of Employees</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.noemployee} maxLength='15' 
                type='number' name='noemployee'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              
              <FormItem><h3 style={{color:'white'}}>Industry Sector</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.industry} maxLength='15' 
                name ='industry'
                style={{color:'gray',
                height:'50px',width:'98%',fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Phone Number</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.phone} maxLength='15' required={true} 
                type='number' name ='phone'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Fax Number</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.faxno} maxLength='15' 
                type='number' name = 'faxno'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Street Address</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.address} maxLength='30' required={true}
                name='address'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>City</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.city} maxLength='15' required={true}
                name='city'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>State/Proviance</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.state} maxLength='15' required={true}
                name = 'state'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Country</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.country} maxLength='15' required={true}
                name = 'country'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Post Code</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.postcode} maxLength='10' required={true}
                type='number' name = 'postcode'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
            
              <FormItem><h2 style={{color:'#9a9ae6',fontWeight:'bolder',
                        fontFamily:'fantasy',fontSize:'30px'}}>Contact Info</h2></FormItem>
              <FormItem><h3 style={{color:'white'}}>Job Title</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.jobtitle} maxLength='10' 
                name ='jobtitle'
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
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>First Name</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.fname} maxLength='10' name='fname'
                style={{color:'gray',
                height:'50px',width:'98%',fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Last Name</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.lname} maxLength='10' name='lname'
                style={{color:'gray',
                height:'50px',width:'98%',fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>E-mail</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.email} maxLength='30' required={true} 
                type='email' name='email'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem><h3 style={{color:'white'}}>Cell Phone Number</h3></FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.mobileno} maxLength='15' 
                type='number' name='mobileno'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit'  style={{color:'White',
                width:'98%',height:'50px',fontSize:'30px'}}>
                  Update
              </Button>
            </FormItem>
          </form>
        </div>
      );
    }
  else{
    this.companyd= this.props.data.company;
    return(<p>{console.log(this.companyd)}</p>);
  }
  }
}

export default withRouter(EditCustomer);
