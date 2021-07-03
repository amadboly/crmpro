/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Menu, Dropdown, Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const menu = (record)=>(
  <Menu>
    <Menu.Item>
    <Link to ={`/contacts/edit/${record}`}>
      Edit Contact No {record}
    </Link>
    </Menu.Item>
    <Menu.Item>
    <Link to ={`/contacts/delete/${record}`}>
      Delete Contact No {record}
    </Link>
    </Menu.Item>
  </Menu>
);

//function NestedTable() {
const NestedTable = (record) =>{

  const expandedRowRender = (record) => {
  //const expandRowByClick = (record)=>{
    const columns = [
          { title: 'Mobile', dataIndex: 'mobileno', key: 'mobileno' },
          { title: 'Phone Number', dataIndex: 'phone', key: 'phone' },
          { title: 'Fax Number', dataIndex: 'faxno', key: 'faxno' },
    ];
    const data= [];
      data.push(
        {
          phone:record.phone,
          mobileno:record.mobileno,
          faxno:record.faxno,
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
    { title: 'Job Title', dataIndex: 'jobtitle', key: 'jobtitle' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'First Name', dataIndex: 'fname', key: 'fname' },
    { title: 'Last Name', dataIndex: 'lname', key: 'lname' },
    { title: 'E-mail', dataIndex: 'email', key: 'email' },
    { title:'Customer-ID',dataIndex:'customerid',key:'customerid'},
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
      jobtitle:record.jobtitle,
      title:record.title,
      fname:record.fname,
      lname:record.lname,
      email:record.email,
      customerid:record.customerid
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
