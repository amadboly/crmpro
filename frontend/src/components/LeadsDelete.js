/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable array-callback-return */
import React from 'react';
import {Form,Button,Input}from 'antd';
import axios from 'axios';
import {withRouter} from 'react-router';


class CustID extends React.Component{
    state ={
        todos : [],
        cust:[]
    }

    componentDidMount (data) {
        axios
            .get('/customer/')
            .then(res=>{
                this.setState({
                    cust:res.data
                });
            console.log(this.state.cust);
            })
            .catch((err) => console.log(err));

            axios
            .get(`/customer/${this.props.data}`)
            .then(res=>{
                this.setState({
                    todos:res.data
                });
            console.log(this.state.todos);
            })
            .catch((err) => console.log(err));
        }

    render(data){
        const todos  = this.state.todos;
        //const cust = this.state.cust;
        //const custID=this.props.data;
        console.log(todos);
        return(
            <select name='customerid'
            style={{color:'gray',width:'98%',height:'50px'
            ,backgroundColor:'#282c34'
            ,fontSize:'20px'
            }}>
            <option value={ `${todos.id}` }>
            { todos.company }
            </option>
            )
            </select>
            );
    }
}


const FormItem = Form.Item;
class DeleteLead extends React.Component{

  handleFormSubmit = (event)=>{
    const LeadID=this.props.data.id;
    //console.log(LeadID);
    //console.log(event);
    event.preventDefault();
    axios.delete(`/lead/${LeadID}/`)
    .then(res => console.log(res))
    .catch(err=>console.log(err));
    this.props.history.push('/leads');
    this.forceUpdate();

  }
  render(){
    if (this.props.data.id !== undefined){
      return(
        <div>
            <form onSubmit={this.handleFormSubmit}>
            <FormItem><h2 style={{color:'#9a9ae6',
            fontWeight:'bolder',fontFamily:'fantasy',fontSize:'30px'}}>
            Lead {this.props.data.title} Info</h2>
            </FormItem>
            <FormItem>
                <h3 style={{color:'white'}}>Lead Owner</h3>
            </FormItem>
                <FormItem>
                <Input defaultValue={this.props.data.leadowner} maxLength='20' required={true}
                name='leadowner' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }} />
                </FormItem>

                <FormItem><h3 style={{color:'white'}}>Lead Title</h3></FormItem>
                <FormItem>
                <Input defaultValue={this.props.data.title} maxLength='100' required={true}
                name='title' readOnly={true}
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
                <option value = {this.props.data.source}>{this.props.data.source}</option>
                </select>
                </FormItem>
                <FormItem><h3 style={{color:'white'}}>Status</h3></FormItem>
                <FormItem>
                <select maxLength='100' name='status'
                style={{color:'gray',width:'98%',height:'50px'
                                ,backgroundColor:'#282c34'
                                ,fontSize:'20px'
                                }}>
                <option value={this.props.data.status}>{this.props.data.status}</option>
                </select>
                </FormItem>
                <FormItem><h3 style={{color:'white'}}>Rating</h3></FormItem>
                <FormItem>
                <select maxLength='20' name='rating'
                style={{color:'gray',width:'98%',height:'50px'
                                ,backgroundColor:'#282c34'
                                ,fontSize:'20px'
                                }}>
                <option value={this.props.data.rating}>{this.props.data.rating}</option>
                </select>
                </FormItem>
                <FormItem><h3 style={{color:'white'}}>Value $</h3></FormItem>
                <FormItem>
                <Input defaultValue={this.props.data.value} maxLength='15' required={true}
                type='number' name ='value' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
                </FormItem>
                <FormItem><h3 style={{color:'white'}}>Created By</h3></FormItem>
                <FormItem>
                <Input  maxLength='25' defaultValue={this.props.data.createdby}
                name = 'createdby' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
                </FormItem>
                <FormItem><h3 style={{color:'white'}}>Remarks</h3></FormItem>
                <FormItem>
                <Input.TextArea defaultValue={this.props.data.remarks} maxLength='100'
                name='remarks' readOnly={true}
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
                <option value={this.props.data.salesdesc}>{this.props.data.salesdesc}</option>
                </select>
                </FormItem>
                <FormItem><h3 style={{color:'white'}}>Modified By</h3></FormItem>
                <FormItem>
                <Input  maxLength='15' defaultValue={this.props.data.modby}
                name = 'modby' readOnly={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
                </FormItem>
                <FormItem><h3 style={{color:'white'}}>Customer ID</h3></FormItem>
                <FormItem>

                <CustID data={this.props.data.customerid}/>
                </FormItem>
            <FormItem>
                <Button type='danger' htmlType='submit' style={{color:'White',
                width:'98%',height:'50px',fontSize:'30px'}}>
                    Delete
                </Button>
            </FormItem>
            </form>
        </div>
      );
    }
  else{
    this.leadd= this.props.data.id;
    return(<p>{console.log(this.leadd)}</p>);
  }
  }
}

export default withRouter(DeleteLead ) ;
