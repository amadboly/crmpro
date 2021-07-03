/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const menu = (re)=>(
  <Menu>
    <Menu.Item><Link to ={`/marketing/edit/${re}`}>Edit Campaign No{re}</Link></Menu.Item>
    <Menu.Item><Link to ={`/marketing/delete/${re}`}>Delete Campaign No{re}</Link></Menu.Item>
  </Menu>
);

const NestedTableLeads = (record) =>{

  const expandedRowRender = (record) => {
      const columns = [
      {title:'Target-Audience',
        children:[
          { title: 'Target-Customers', dataIndex: 'targetaudiance', key: 'targetaudiance' },
          { title: 'Target-Contry', dataIndex: 'country', key: 'country' },
          { title: 'Target-Industry', dataIndex: 'industry', key: 'industry' },
          { title: 'Target-Age', dataIndex: 'age', key: 'age' },
          { title: 'Target-Annualrev', dataIndex: 'annualrev', key: 'annualrev' },
          { title: 'Target-noemployee', dataIndex: 'noemployee', key: 'noemployee' },
          { title: 'Target-Volume', dataIndex: 'volume', key: 'volume' },
        ]
      },
      {title:'Campaign-Duration',
        children:[
          { title: 'Duration-Days', dataIndex: 'duration', key: 'duration' },
          { title: 'Start-Date', dataIndex: 'startdate', key: 'startdate' },
          { title: 'End-Date', dataIndex: 'enddate', key: 'enddate' },
        ]
      },
      {title:'Campaign-Outcome',
        children:[
          { title: 'Expected-Leads', dataIndex: 'leadsvolume', key: 'leadsvolume' },
          { title: 'Current-Leads', dataIndex: 'cleadsvolume', key: 'cleadsvolume' },
        ]
      },
      { title: 'Remarks', dataIndex: 'remarks', key: 'remarks' },
      { title: 'Mod-Date', dataIndex: 'moddate', key: 'moddate' },
    ]

    const expdata= [];
      expdata.push(
        {
          duration:record.duration,
          startdate:record.startdate,
          enddate:record.enddate,
          targetaudiance:record.targetaudiance,
          country:record.country,
          industry:record.industry,
          age:record.age,
          gender:record.gender,
          annualrev:record.annualrev,
          noemployee:record.noemployee,
          volume:record.volume,
          leadsvolume:record.leadsvolume,
          cleadsvolume:record.cleadsvolume,
          remarks:record.remarks,
          moddate:record.moddate,
      });


    return <Table columns={columns}
                  dataSource={expdata}
                  bordered
                  pagination={false} />;
  };


  const columns = [
    { title:'Campaign',
      children:[
        { title: 'Campaign', dataIndex: 'id', key: 'id' },
        { title: 'Campaign-Name', dataIndex: 'campainname', key: 'campainname' },
        { title: 'About', dataIndex: 'about', key: 'about' },
        { title: 'Tools', dataIndex: 'tools', key: 'tools'},
        { title: 'Status', dataIndex: 'status', key: 'status' },
      ]
    },
    {title:'Campaign-Finance',
      children:[
        { title: 'Budget', dataIndex: 'budget', key: 'budget' },
        { title: 'Current-Expenses',dataIndex:'expenses',key:'expenses'},
      ]
    },
    { title: 'Created-By', dataIndex: 'createdby', key: 'createdby' },
    { title: 'Assign-To', dataIndex: 'assignto', key: 'assignto' },
    { title: 'Date-Created',dataIndex:'createddate',key:'createddate'},
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

  ];

  const marketingdata = [];
  marketingdata.push(
    {
      id:record.id,
      campainname:record.campainname,
      budget:record.budget,
      expenses:record.expenses,
      about:record.about,
      tools:record.tools,
      status:record.status,
      createdby:record.createdby,
      assignto:record.assignto,
      createddate:record.createddate,

    }
  );
  console.log(marketingdata);

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
