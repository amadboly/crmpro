import React from 'react';
import EditCampain from '../components/MarketingEdit';
import axios from 'axios';


class CampainEditView extends React.Component{
    state ={
        campaindata:{}
    }

    componentDidMount(){
        const CampainID=this.props.match.params.CampainID;
        axios
            .get(`/marketing/${CampainID}/`)
            .then(res=>{
                this.setState({
                    campaindata:res.data
                });
            //console.log(res.data);

            })
            .catch((err) => console.log(err));
    }

    render(){

        return(
            <div>
                <EditCampain data={this.state.campaindata}/>
            </div>
        );
    };

}

export default CampainEditView;
