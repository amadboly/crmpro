import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
// eslint-disable-next-line
import {
  // eslint-disable-next-line
  DesktopOutlined,
  // eslint-disable-next-line
  PieChartOutlined,
  // eslint-disable-next-line
  FileOutlined,
  TeamOutlined,
  // eslint-disable-next-line
  UserOutlined,
  // eslint-disable-next-line
  CustomerServiceOutlined,
  // eslint-disable-next-line
  CustomerServiceFilled,
  // eslint-disable-next-line
  CustomerServiceTwoTone,
  BankOutlined,
  HomeFilled,
  // eslint-disable-next-line
  HomeOutlined,
  HddTwoTone,
} from '@ant-design/icons';
import '../logo.svg';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class CustomeLayout extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
             <Title style={{color:'White',padding:10}}level={1}>
             <Link to={'/'}>CRM</Link></Title>
          </Header>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed}
              onCollapse={this.onCollapse}>
              <div className="logo"/>
              <Menu theme="dark" defaultOpenKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeFilled />} >
                  <Link to = {'/'}>Home</Link>
                </Menu.Item>
                <SubMenu key="sub0" icon={<TeamOutlined />}title="Customers">
                <Menu.Item key="2" icon={<TeamOutlined />}>
                  <Link to = {'/customers'}>List</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<TeamOutlined />}>
                  <Link to = {'/customers/new'}>New</Link>
                </Menu.Item>
                </SubMenu>
                <SubMenu key="sub1" icon={<BankOutlined />}title="Leads">
                <Menu.Item key="4" icon={<BankOutlined />}>
                  <Link to = {'/leads'}>List</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<BankOutlined />}>
                  <Link to = {'/leads/new'}>New</Link>
                </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />}title="Contacts">
                  <Menu.Item key="6" icon={<TeamOutlined />}>
                    <Link to = {'/contacts'}>List</Link>
                  </Menu.Item>
                  <Menu.Item key="7" icon={<TeamOutlined />}>
                    <Link to = {'/contacts/new'}>New</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<HddTwoTone />}title="Marketing">
                  <Menu.Item key="8" icon={<HddTwoTone />}>
                    <Link to = {'/marketing'}>List</Link>
                  </Menu.Item>
                  <Menu.Item key="9" icon={<HddTwoTone />}>
                    <Link to = {'/marketing/new'}>New</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          <Layout>
          <Content style={{ backgroundColor: '#282c34',margin: '0 0px' }}>
            <Breadcrumb style={{color:'#9a9ae6',margin: '5px 0'}}>
              <Breadcrumb.Item ><Link to = {'/'}style={{color:'#9a9ae6',
            fontFamily:'fantasy',fontSize:'30px',fontWeight:'bolder' }}>
            Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item style={{color:'#9a9ae6',
            fontFamily:'fantasy',fontSize:'30px',fontWeight:'bolder' }}>
            Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background"
            style={{ padding: 10, minHeight: 360,color:'lightgray' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer
          style={{ backgroundColor: '#282c34',color:'white',
          textAlign: 'center' }}>CRM ©2021 Created by ARMMIOT</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default CustomeLayout;
