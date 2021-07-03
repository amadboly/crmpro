import React from 'react';
//import NestedTable from '../components/Customerview';
import axios from 'axios';
import NestedTableLeads from '../components/Marketingview';


class MarketingListView extends React.Component{
    state ={
        marketingdata:[]
    }

    componentDidMount(){

        axios
            .get('/marketing/')
            .then(res=>{
                this.setState({
                    marketingdata:res.data
                });
            //console.log(res.data);

            })
            .catch((err) => console.log(err));
    }

    render(){
        return(
            <div>
                <h1 style={{color:'green',fontSize:'40px'}}>Campaign List</h1>
                <NestedTableLeads data={this.state.marketingdata}/>
            </div>
        );
    };

}

export default MarketingListView;
