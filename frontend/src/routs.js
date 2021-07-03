import React from 'react';
import {Route} from 'react-router-dom';
import CustomerListview from './containers/CustomerListview';
import LeadsListView from './containers/LeadsListView';
import CustomerNewForm from './containers/CustomerNewView';
import LeadsNewForm from './containers/LeadsNewView';
import CustomerEditView from './containers/CustomerEditView';
import LeadEditView from './containers/LeadsEditView';
import CustomerDeleteView from './containers/CustomerDeleteView';
import LeadDeleteView from './containers/LeadsDeleteView';
import ContactsListView from './containers/ContactsListview';
import ContactsNewForm from './containers/ContactsNewView';
import ContactsEditView from './containers/ContactsEditView';
import ContactDeleteView from './containers/ContactsDeleteView';
import MarketingListView from './containers/MarketingListView';
import CampainEditView from './containers/MarketingEditView';


const BaseRouter = ()=>(
    <div>
        <Route exact path='/' component = {CustomerListview}/>
        <Route exact path='/customers' component = {CustomerListview}/>
        <Route exact path='/customers/new' component = {CustomerNewForm}/>
        <Route exact path='/customers/edit/:CustomerID'
          component = {CustomerEditView}/>
        <Route exact path='/customers/delete/:CustomerID'
          component = {CustomerDeleteView}/>
        <Route exact path='/leads' component = {LeadsListView}/>
        <Route exact path='/leads/new' component = {LeadsNewForm}/>
        <Route exact path='/lead/edit/:LeadID' component = {LeadEditView}/>
        <Route exact path='/lead/delete/:LeadID' component = {LeadDeleteView}/>
        <Route exact path='/contacts' component = {ContactsListView}/>
        <Route exact path='/contacts/new' component = {ContactsNewForm}/>
        <Route exact path='/contacts/edit/:ContactID'
          component = {ContactsEditView}/>
        <Route exact path='/contacts/delete/:ContactID'
          component = {ContactDeleteView}/>
        <Route exact path='/marketing' component = {MarketingListView}/>
        <Route exact path='/marketing/edit/:CampainID'
          component = {CampainEditView}/>

    </div>
);

export default BaseRouter;
