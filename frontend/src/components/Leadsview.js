/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const menu = (re)=>(
  <Menu>
    <Menu.Item><Link to ={`/lead/edit/${re}`}>Edit Lead No{re}</Link></Menu.Item>
    <Menu.Item><Link to ={`/lead/delete/${re}`}>Delete Lead No{re}</Link></Menu.Item>
  </Menu>
);

//function NestedTable() {
const NestedTableLeads = (record) =>{
  
  const expandedRowRender = (record) => {
  //const expandRowByClick = (record)=>{
    const columns = [
      {title:'Leads-Misc',
        children:[
          { title: 'Created By', dataIndex: 'createdby', key: 'createdby' },
          { title: 'Modified By', dataIndex: 'modby', key: 'modby' },
        ]
      },
      {title:'Leads-Remarks',
        children:[
          { title: 'Remarks', dataIndex: 'remarks', key: 'remarks' },
          { title: 'Sales Team Opinion', dataIndex: 'salesdesc', key: 'salesdesc' },
        ]
      },
    ]
            
    const expdata= [];
      expdata.push(
        {
          createdby:record.createdby,
          modby:record.modby,
          remarks:record.remarks,
          salesdesc:record.salesdesc,
      });
    
    //console.log(expdata);
  
    return <Table columns={columns}
                  //expandable ={{rowExpandable: record => record.id !=='null'}} 
                  dataSource={expdata}
                  bordered
                  pagination={false} />;
  };

 
  const columns = [
    { title: 'Lead-ID', dataIndex: 'id', key: 'id' },
    { title: 'Lead Title', dataIndex: 'title', key: 'title' },
    { title: 'Lead Value', dataIndex: 'value', key: 'value' },
    { title: 'Lead Owner', dataIndex: 'leadowner', key: 'leadowner' },
    { title: 'Customer ID', dataIndex: 'customerid', key: 'customerid'},
    { title: 'Lead Source', dataIndex: 'source', key: 'source' },
    { title: 'Lead Status', dataIndex: 'status', key: 'status' },
    { title: 'Lead Rating', dataIndex: 'rating', key: 'rating' },
    {
        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        render: (dataIndex) => (
          <Space size="middle">
            <Dropdown overlay={menu (dataIndex)}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    //{ title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];
 
  const leadsdata = [];
  leadsdata.push(
    {
      id:record.id,
      leadowner:record.leadowner,
      customerid:record.customerid,
      title:record.title,
      source:record.source,
      status:record.status,
      rating:record.rating,
      value:record.value,

    }
  );
  console.log(leadsdata);

  return (
    <Table 
      className="components-table-demo-nested" 
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={record.data}
      bordered
      pagination={{ pageSize: 1 }}
    />
  );
  
}


export default NestedTableLeads;

