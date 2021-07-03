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

class NewLeads extends React.Component{
    
  handleFormSubmit = (event)=>{
    event.preventDefault();
    const leadowner = event.target.elements.leadowner.value;
    const title= event.target.elements.title.value;
    const source = event.target.elements.source.value;
    const status = event.target.elements.status.value;
    const rating = event.target.elements.rating.value;
    const value = event.target.elements.value.value;
    const createdby= event.target.elements.createdby.value;
    const remarks = event.target.elements.remarks.value;
    const salesdesc = event.target.elements.salesdesc.value;
    const modby = event.target.elements.modby.value;
    const customerid= event.target.elements.customerid.value;
    console.log(customerid);
    axios.post('/lead/',{
        leadowner : leadowner,
        title : title,
        source : source,
        status : status,
        rating : rating,
        value : value,
        createdby : createdby,
        remarks : remarks,
        salesdesc : salesdesc,
        modby : modby,
        customerid:customerid
    })
    .then(res => console.log(res))
    .catch(err=>console.log(err));
    this.props.history.push('/leads');
    this.forceUpdate();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <FormItem><h2 style={{color:'#9a9ae6',
        fontWeight:'bolder',fontFamily:'fantasy',fontSize:'30px'}}>
          Lead Info</h2>
          </FormItem>
          <FormItem>
            <h3 style={{color:'white'}}>Lead Owner</h3>
          </FormItem>
            <FormItem>
              <Input placeholder='Lead Owner ...' maxLength='20' required={true}
              name='leadowner'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34',
              }} />
            </FormItem>
          
            <FormItem><h3 style={{color:'white'}}>Lead Title</h3></FormItem>
            <FormItem>
              <Input placeholder='Lead Title ...' maxLength='100' required={true}
              name='title'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34',
              }}/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Lead Source</h3></FormItem>
            <FormItem>
            <select maxLength='100' name='source'
            style={{color:'gray',width:'98%',height:'50px'
                            ,backgroundColor:'#282c34'
                            ,fontSize:'20px'
                            }}>
              <option value="Web">Web</option>
              <option value="marketing">Marketing Campain</option>
              <option value="customer request">Customer Request</option>
            </select>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Status</h3></FormItem>
            <FormItem>
            <select maxLength='100' name='status'
            style={{color:'gray',width:'98%',height:'50px'
                            ,backgroundColor:'#282c34'
                            ,fontSize:'20px'
                            }}>
              <option value="Open">Open</option>
              <option value="Contacted">Contacted</option>
              <option value="Dropped">Dropped</option>
              <option value="Qutation submitted">Qutation submitted</option>
              <option value="Pending">Pending</option>
              <option value="Win">Win</option>
              <option value="Lost">Lost</option>
            </select>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Rating</h3></FormItem>
            <FormItem>
            <select maxLength='20' name='rating'
            style={{color:'gray',width:'98%',height:'50px'
                            ,backgroundColor:'#282c34'
                            ,fontSize:'20px'
                            }}>
              <option value="Cold">Cold</option>
              <option value="Warm">Warm</option>
              <option value="Hot">Hot</option>
            </select>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Value $</h3></FormItem>
            <FormItem>
              <Input placeholder='Value $ ...' maxLength='15' required={true} 
              type='number' name ='value' defaultValue='0'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}} />
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Created By</h3></FormItem>
            <FormItem>
              <Input placeholder='Created By ...' maxLength='25' defaultValue='Marketing'
              name = 'createdby'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}}/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Remarks</h3></FormItem>
            <FormItem>
              <Input.TextArea placeholder='remarks ...' maxLength='100' 
              name='remarks'
              style={{color:'gray',height:'100px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}}/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Sales Opinion</h3></FormItem>
            <FormItem>
            <select maxLength='15' name='salesdesc'
            style={{color:'gray',width:'98%',height:'50px'
                            ,backgroundColor:'#282c34'
                            ,fontSize:'20px'
                            }}>
              <option value="Qualified">Qualified</option>
              <option value="Drop">Drop</option>
            </select>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Modified By</h3></FormItem>
            <FormItem>
              <Input placeholder='Modified By ...' maxLength='15' defaultValue='Sales'
              name = 'modby'
              style={{color:'gray',height:'50px',width:'98%',
              fontSize:'20px',backgroundColor:'#282c34'}}/>
            </FormItem>
            <FormItem><h3 style={{color:'white'}}>Customer ID</h3></FormItem>
            <FormItem>
              <CustID/>
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

export default withRouter(NewLeads);
