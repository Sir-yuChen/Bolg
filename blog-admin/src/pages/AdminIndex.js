import React,{useState} from 'react'
import '../style/adminIndex.css'
import AddArticle from '../components/AddArticle'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Route} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminIndex = () => {

    const [collapsed,setCollapsed] = useState(false)

    const  onCollapse = collapsed => {
        setCollapsed(collapsed)
      };
    

    return (
        <div>
             <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" >
                    博客园后台管理系统
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        网站数据统计
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PieChartOutlined />}>
                        写作发布
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<DesktopOutlined />} title="工作台">
                        <Menu.Item key="3">文章管理</Menu.Item>
                        <Menu.Item key="4">文章类别管理</Menu.Item>
                        <Menu.Item key="5">标签管理</Menu.Item>
                        <Menu.Item key="6">Icon图标管理</Menu.Item>
                        <Menu.Item key="7">学习路线管理</Menu.Item>
                        <Menu.Item key="8">评论管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<UserOutlined />} title="基本信息管理">
                        <Menu.Item key="11">个人信息管理</Menu.Item>
                        <Menu.Item key="12">账户密码修改</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<UserOutlined />} title="权限管理">
                        <Menu.Item key="13">分配权限</Menu.Item>
                        <Menu.Item key="14">管理员列表</Menu.Item>
                        <Menu.Item key="15">权限规则</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} >
                    页面头部
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    {/* 面包屑导航 */}
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Route path='/index/' exact component={AddArticle}/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>bokeyuan.com ©2018 Created by zhangyu</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default AdminIndex
