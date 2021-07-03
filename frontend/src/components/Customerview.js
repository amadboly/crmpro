/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Menu, Dropdown, Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const menu = (record)=>(
  <Menu>
    <Menu.Item>
    <Link to ={`/customers/edit/${record}`}>
      Edit Customer No {record}
    </Link>
    </Menu.Item>
    <Menu.Item>
    <Link to ={`/customers/delete/${record}`}>
      Delete Customer No {record}
    </Link>
    </Menu.Item>
  </Menu>
);

//function NestedTable() {
const NestedTable = (record) =>{

  const expandedRowRender = (record) => {
  //const expandRowByClick = (record)=>{
    const columns = [
      {title:'Contact-Persons',
        children:[
          { title: 'Job Title', dataIndex: 'jobtitle', key: 'jobtitle' },
          { title: 'Title', dataIndex: 'title', key: 'title' },
          { title: 'First Name', dataIndex: 'fname', key: 'fname' },
          { title: 'Last Name', dataIndex: 'lname', key: 'lname' },
          { title: 'E-mail', dataIndex: 'email', key: 'email' },
          { title: 'Mobile', dataIndex: 'mobileno', key: 'mobileno' },
        ]
      },
      {title:'Company Phones',
        children:[
          { title: 'Phone Number', dataIndex: 'phone', key: 'phone' },
          { title: 'Fax Number', dataIndex: 'faxno', key: 'faxno' },
        ]
      },

      {title:'Company Address',
        children:[
          {
            title:'Street',
            dataIndex:'address',
            key:'address',
          },
          {
            title:'City',
            dataIndex:'city',
            key:'city',
          },
          {
            title:'State',
            dataIndex:'state',
            key:'state'
          },
          {
            title:'Country',
            dataIndex:'country',
            key:'country'
          },
          {
            title:'Postal Code',
            dataIndex:'postcode',
            key:'postcode'
          }
        ]
      },


    ];
    const data= [];
      data.push(
        {
          jobtitle:record.jobtitle,
          title:record.title,
          fname:record.fname,
          lname:record.lname,
          email:record.email,
          phone:record.phone,
          mobileno:record.mobileno,
          faxno:record.faxno,
          address:record.address,
          city:record.city,
          state:record.state,
          country:record.country,
          postcode:record.postcode
      });

    console.log(data);

    return <Table columns={columns}
                  //expandable ={{rowExpandable: record => record.id !=='null'}}
                  dataSource={data}
                  bordered
                  pagination={false} />;
  };


  const columns = [
    { title: 'Id-No', dataIndex: 'id', key: 'id'},
    { title: 'Company Name', dataIndex: 'company', key: 'company' },
    { title: 'Company Web Address', dataIndex: 'compwebadd', key: 'compwebadd'},
    { title: 'Annual Revenue', dataIndex: 'annualrev', key: 'annualrev' },
    { title: 'Number of Employees', dataIndex: 'noemployee', key: 'noemployee' },
    { title: 'Industry Sector', dataIndex: 'industry', key: 'industry' },
    {

        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        render: (dataIndex) => (
          <Space size="middle">
            <Dropdown overlay={menu (dataIndex)}>
              <a>
               More  <DownOutlined />
              </a>
            </Dropdown>
          </Space>

        ),
      },

    //{ title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const datat = [];
  datat.push(
    {
      id:record.id,
      company:record.company,
      compwebadd:record.compwebadd,
      annualrev:record.annualrev,
      noemployee:record.noemployee,
      industry:record.industry
    }
  );
  console.log(datat);

  return (
    <Table

      className="components-table-demo-nested"
      columns={columns}
      //style={{backgroundColor: "#282c34"}}
      expandable={{ expandedRowRender }}
      dataSource={record.data}
      bordered
      pagination={{ pageSize: 1 }}
    />
  );
}

export default NestedTable;
