import React,{useState,useEffect} from 'react'
import '../style/adminIndex.css'
import AddArticle from '../components/index/AddArticle'
import Breadcrumbs from '../components/navigate/Breadcrumbs'
import {getAdminMenu} from '../service/index'

import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Route} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminIndex = () => {
    // const rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4', 'sub5']

    const [collapsed,setCollapsed] = useState(false)
    const [menuList,setMenuList] =  useState([])
    const [openKeys, setOpenKeys] = useState([]);
    const [rootSubmenuKeys, setRootSubmenuKeys] = useState([]);
    const [menuList_child, setMenuList_child] = useState([]);



    const  onCollapse = collapsed => {
        setCollapsed(collapsed)
      };

    useEffect(() => {
        getAdminMenu().then(
            res =>{
                    setMenuList(res.data.data)
                    menuList.map(
                        menuItem =>{
                            rootSubmenuKeys.push(menuItem.menu_uuid)
                        }
                    )
            }
        )
    }, [])

    //菜单list
    const getAdminMenuList = (menu_uuid)=>{
        console.log(`打印uuid`,menu_uuid )
        getAdminMenu(menu_uuid===(null||''||undefined) ? 0:menu_uuid).then(
            res =>{
                setMenuList_child(res.data.data)
            }
        )
    }

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
      };


    return (
        <div>
             <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" >
                    博客园后台管理系统
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
                    {
                        menuList.map(
                            subMenuItem =>{
                                return(
                                    <SubMenu 
                                        key={subMenuItem.menu_uuid} 
                                        icon={<PieChartOutlined />} 
                                        title={subMenuItem.menu_name}
                                        onClick={getAdminMenuList}
                                    >
                                        {
                                            menuList_child.map(
                                                menus =>{
                                                    return(
                                                        <Menu.Item key={menus.menu_uuid}>{menus.menu_name}</Menu.Item>
                                                    )
                                                }
                                            )
                                        }
                                    </SubMenu>
                                )
                            }
                        )
                    }
                    
                    <SubMenu key="sub2" icon={<PieChartOutlined />} title=" 写作发布" ></SubMenu>
                    <SubMenu key="sub3" icon={<DesktopOutlined />} title="工作台"  >
                        <Menu.Item key="3">文章管理</Menu.Item>
                        <Menu.Item key="4">文章类别管理</Menu.Item>
                        <Menu.Item key="5">标签管理</Menu.Item>
                        <Menu.Item key="6">Icon图标管理</Menu.Item>
                        <Menu.Item key="7">学习路线管理</Menu.Item>
                        <Menu.Item key="8">评论管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<UserOutlined />} title="基本信息管理">
                        <Menu.Item key="11">个人信息管理</Menu.Item>
                        <Menu.Item key="12">账户密码修改</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<UserOutlined />} title="权限管理">
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
                    <Breadcrumbs/>
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
