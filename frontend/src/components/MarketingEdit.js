/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable array-callback-return */
import React from 'react';
import {Form,Button,Input}from 'antd';
import axios from 'axios';
import {withRouter} from 'react-router';

const FormItem = Form.Item;
class EditCampain extends React.Component{

  handleFormSubmit = (event)=>{
    const CampainID=this.props.data.id;
    event.preventDefault();
    const campainname = event.target.elements.campainname.value;
    const budget= event.target.elements.budget.value;
    const expenses= event.target.elements.expenses.value;
    const about = event.target.elements.about.value;
    const createdby = event.target.elements.createdby.value;
    const assignto = event.target.elements.assignto.value;
    const createddate = event.target.elements.createddate.value;
    const tools = event.target.elements.tools.value;
    const targetaudiance = event.target.elements.targetaudiance.value;
    const country = event.target.elements.country.value;
    const industry = event.target.elements.industry.value;
    const age = event.target.elements.age.value;
    const gender = event.target.elements.gender.value;
    const annualrev = event.target.elements.annualrev.value;
    const noemployee = event.target.elements.noemployee.value;
    const volume = event.target.elements.volume.value;
    const duration = event.target.elements.duration.value;
    const startdate = event.target.elements.startdate.value;
    const enddate = event.target.elements.enddate.value;
    const remarks = event.target.elements.remarks.value;
    const leadsvolume = event.target.elements.leadsvolume.value;
    const cleadsvolume = event.target.elements.cleadsvolume.value;

    axios.put(`/marketing/${CampainID}/`,{
        campainname : campainname,
        budget : budget,
        expenses:expenses,
        about : about,
        createdby : createdby,
        assignto : assignto,
        createddate : createddate,
        tools : tools,
        targetaudiance : targetaudiance,
        country : country,
        industry: industry,
        age : age,
        gender : gender,
        annualrev: annualrev,
        noemployee:noemployee,
        volume:volume,
        duration:duration,
        startdate:startdate,
        enddate:enddate,
        remarks:remarks,
        leadsvolume:leadsvolume,
        cleadsvolume:cleadsvolume,
    })
    .then(res => console.log(res))
    .catch(err=>console.log(err));
    this.props.history.push('/marketing');
    this.forceUpdate();

  }
  render(){
    if (this.props.data.id !== undefined){
      return(
        <div>
            <form onSubmit={this.handleFormSubmit}>
              <FormItem>
                <h2 style={{color:'#9a9ae6',fontWeight:'bolder',
                fontFamily:'fantasy',fontSize:'30px'}}>
                  Campaign {this.props.data.campainname} Info
                </h2>
              </FormItem>
              <FormItem>
                  <h3 style={{color:'white'}}>Campaign Name</h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.campainname} maxLength='20'
                required={true} name='campainname'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }} />
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Campaign Status
                </h3>
              </FormItem>
              <FormItem>
                <select maxLength='30' name='status'
                style={{color:'gray',width:'98%',height:'50px'
                                ,backgroundColor:'#282c34'
                                ,fontSize:'20px'
                                }}>
                  <option value={this.props.data.status}>
                    {this.props.data.status}
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="Running">Running</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Finished">Finished</option>
                </select>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>Budget ($)</h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.budget} maxLength='15'
                required={true} name='budget' type = 'number'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>Current Expenses ($)</h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.expenses} maxLength='30'
                name='expenses' type='number'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Campaign About
                </h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.about} maxLength='100'
                required={true} name='about'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Created By
                </h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.createdby} maxLength='100'
                required={true} name='createdby'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Assign To
                </h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.assignto} maxLength='100'
                required={true} name='assignto'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34',
                }}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Date Created
                </h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.createddate} maxLength='15'
                required={true} type='date' name ='createddate'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Campaign Tool
                </h3>
              </FormItem>
              <FormItem>
                <select maxLength='15' name='tools'
                style={{color:'gray',width:'98%',height:'50px'
                                ,backgroundColor:'#282c34'
                                ,fontSize:'20px'
                                }}>
                  <option value={this.props.data.tools}>
                    {this.props.data.tools}
                  </option>
                  <option value="Social Media">Social Media</option>
                  <option value="Email">Email</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Exhabition">Exhabition</option>
                  <option value="Online ads">Online ads</option>
                  <option value="Media Ads">Media Ads</option>
                  <option value="Flyers">Flyers</option>
                  <option value="Printed clothes">Printed clothes</option>
                  <option value="Printed DeskTools">
                    Printed DeskTools
                  </option>
                </select>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Target Customers
                </h3>
              </FormItem>
              <FormItem>
                <select maxLength='15' name='targetaudiance'style=
                  {{color:'gray',width:'98%',height:'50px'
                      ,backgroundColor:'#282c34'
                      ,fontSize:'20px'
                  }}>
                    <option value={this.props.data.targetaudiance}>
                      {this.props.data.targetaudiance}
                    </option>
                    <option value="Indviduals">Indviduals</option>
                    <option value="Companies">Companies</option>
                </select>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Target Country
                </h3>
              </FormItem>
              <FormItem>
                <Input defaultValue={this.props.data.country} maxLength='15'
                 name ='country'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}} />
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Target Industry
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='15' defaultValue={this.props.data.industry}
                name = 'industry'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Target Age
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='15' defaultValue={this.props.data.age}
                name = 'age'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Target Gender
                </h3>
              </FormItem>
              <FormItem>
                <select maxLength='15' name='gender'
                style={{color:'gray',width:'98%',height:'50px'
                                ,backgroundColor:'#282c34'
                                ,fontSize:'20px'
                                }}>
                  <option value={this.props.data.gender}>
                    {this.props.data.gender}
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Target Audience Annual Rev
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.annualrev}
                name = 'annualrev'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Target Audience No. of Employees
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.noemployee}
                name = 'noemployee'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Audience Volume
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.volume}
                name = 'volume'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Campaign Duration In Days
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.duration}
                name = 'duration'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Campaign Start Date
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.startdate}
                name = 'startdate' type='date'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Campaign End Date
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.enddate}
                name = 'enddate' type='date'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Expected Leads Volume
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.leadsvolume}
                name = 'leadsvolume' type='number'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Current Leads Volume
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.cleadsvolume}
                name = 'cleadsvolume' type='number'
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Remarks
                </h3>
              </FormItem>
              <FormItem>
                <Input.TextArea maxLength='100' defaultValue={this.props.data.remarks}
                name = 'remarks'
                style={{color:'gray',height:'100px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
              <FormItem>
                <h3 style={{color:'white'}}>
                  Last Modification Date
                </h3>
              </FormItem>
              <FormItem>
                <Input  maxLength='30' defaultValue={this.props.data.moddate}
                name = 'moddate' readOnly ={true}
                style={{color:'gray',height:'50px',width:'98%',
                fontSize:'20px',backgroundColor:'#282c34'}}/>
              </FormItem>
             <FormItem>
                <Button type='primary' htmlType='submit' style={{color:'White',
                width:'98%',height:'50px',fontSize:'30px'}}>
                    Update
                </Button>
            </FormItem>
            </form>
        </div>
      );
    }
  else{
    this.CampainIDid= this.props.data.id;
    return(<p>{console.log(this.CampainID)}</p>);
  }
  }
}

export default withRouter(EditCampain) ;
