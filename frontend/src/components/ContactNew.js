import React from 'react';
import {Form,Button,Input}from 'antd';
import axios from 'axios';
import {withRouter} from 'react-router';
const FormItem = Form.Item;

class CustID extends React.Component{
    state ={
        todos : []
    }
    componentDidMount () {
        axios
            .get('/customer/')
            .then(res=>{
                this.setState({
                    todos:res.data
                });
            console.log(this.state.todos);
            })
            .catch((err) => console.log(err));
        }

    render(){
        const todos  = this.state.todos;
        console.log(todos);
        return(
            <select name='customerid'
            style={{color:'gray',width:'98%',height:'50px'
            ,backgroundColor:'#282c34'
            ,fontSize:'20px'
            }}>
            { todos.map((todo) =>
            <option value={ `${todo.id}`}>
            { todo.company }
            </option>
            )}
            </select>
            );
    }
}

class NewContact extends React.Component{

  handleFormSubmit = (event)=>{
    event.preventDefault();
    const jobtitle= event.target.elements.jobtitle.value;
    const title = event.target.elements.title.value;
    const fname = event.target.elements.fname.value;
    const lname= event.target.elements.lname.value;
    const email = event.target.elements.email.value;
    const mobileno = event.target.elements.mobileno.value;
    const phone = event.target.elements.phone.value;
    const faxno= event.target.elements.faxno.value;
    const customerid= event.target.elements.customerid.value;
    console.log(customerid);
    axios.post('/contacts/',{
      jobtitle : jobtitle,
      title : title,
      fname :fname,
      lname : lname,
      email : email,
      mobileno : mobileno,
      phone : phone,
      faxno : faxno,
      customerid:customerid
    })
    .then(res => console.log(res))
    .catch(err=>console.log(err));
    this.props.history.push('/contacts');
    this.forceUpdate();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <FormItem><h2 style={{color:'#9a9ae6',
        fontWeight:'bolder',fontFamily:'fantasy',fontSize:'30px'}}>
          Contact Info</h2>
          </FormItem>
            <FormItem><h3 style={{color:'white'}}>Customer ID</h3></FormItem>
            <FormItem>
              <CustID/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Job Title</h3></FormItem>
            <FormItem>
              <Input placeholder='Job Title ...' maxLength='10'
              name ='jobtitle'
              style={{color:'gray',
              height:'50px',width:'98%',fontSize:'20px',
              backgroundColor:'#282c34'}}/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Title</h3></FormItem>
            <FormItem>
            <select maxLength='10' name='title'
            style={{color:'gray',width:'98%',height:'50px'
                            ,backgroundColor:'#282c34'
                            ,fontSize:'20px'
                            }}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>First Name</h3></FormItem>
            <FormItem>
              <Input placeholder='First Name ...' maxLength='10' name='fname'
              style={{color:'gray',
              height:'50px',width:'98%',fontSize:'20px',
              backgroundColor:'#282c34'}}/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Last Name</h3></FormItem>
            <FormItem>
              <Input placeholder='Last Name ...' maxLength='10' name='lname'
              style={{color:'gray',
              height:'50px',width:'98%',fontSize:'20px',
              backgroundColor:'#282c34'}} />
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>E-mail</h3></FormItem>
            <FormItem>
              <Input placeholder='E-mail ...' maxLength='30' required={true}
              type='email' name='email'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}}/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Cell Phone Number</h3>
            </FormItem>
            <FormItem>
              <Input placeholder='Cell Phone Number ...' maxLength='15'
              name='mobileno'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}} />
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Phone Number</h3>
            </FormItem>
            <FormItem>
              <Input placeholder='Phone Number ...' maxLength='15'
              name ='phone'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}} />
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Fax Number</h3></FormItem>
            <FormItem>
              <Input placeholder='Fax Number ...' maxLength='15'
              name = 'faxno'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}}/>
            </FormItem>
          <FormItem>
            <Button type='primary' htmlType='submit' style={{color:'White',
              width:'98%',height:'50px',fontSize:'30px'}}>
                Submit
            </Button>
          </FormItem>
        </form>
      </div>
    );
  }
}

export default withRouter(NewContact);