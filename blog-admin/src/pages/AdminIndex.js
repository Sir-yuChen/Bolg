import React,{useState,useEffect,Suspense, lazy} from 'react'
import '../style/adminIndex.css'
// import AddArticle from '../components/index/AddArticle'
import Breadcrumbs from '../components/navigate/Breadcrumbs'
import {getAdminMenu} from '../service/index'
import actionTypes from '../redux/actions/actionType'
import {useSelector,useDispatch} from 'react-redux'
// import DataStatistics from '../components/dataStatistics/DataStatistics'

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

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [collapsed,setCollapsed] = useState(false)
    const [menuList,setMenuList] =  useState([])
    const [openKeys, setOpenKeys] = useState([])
    const [rootSubmenuKeys, setRootSubmenuKeys] = useState([])
    let [menuList_child, setMenuList_child] = useState([])
    let [breadcrumbsParam, setBreadcrumbsParam] = useState([])
    let [path, setPath] = useState('/index/')


    const HomePage = lazy(() =>
        import(/* webpackChunkName: "home" */ "../components/dataStatistics/DataStatistics")
    )
    
    const  onCollapse = collapsed => {
        setCollapsed(collapsed)
      };

    useEffect(() => {
        getAdminMenu().then(
            res =>{
                    setMenuList(res.data.data)
                    res.data.data.map(
                        menuItem =>{
                            rootSubmenuKeys.push(menuItem.menu_uuid)
                        }
                    )
            }
        )
    }, [])

    //菜单list
    const getAdminMenuList = (key )=>{
        getAdminMenu(key.key).then(
            res =>{
                setMenuList_child(res.data.data)
                getBreadcrumbsParam(key)
            }
        )
    }
    //组装面包屑参数
    const getBreadcrumbsParam = (key)=>{
        menuList.map(
            menu =>{
                if (menu.menu_uuid === key.key) {
                    dispatch({
                        type:actionTypes.BREADCRUMBSPARAM,
                        breadcrumbsParam:{name:menu.menu_name,url:menu.menu_url,level:menu.level}
                    })
                }
            }
        )

        menuList_child.map(
            child =>{
                if (child.menu_uuid === key.key) {
                    dispatch({
                        type:actionTypes.BREADCRUMBSPARAM,
                        breadcrumbsParam:{name:child.menu_name,url:child.menu_url,level:child.level}
                    })
                }
            }
        )
    }

    //修改路由


    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }


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
                                        onTitleClick={getAdminMenuList}
                                    >
                                        {
                                            menuList_child.map(
                                                menus =>{
                                                    return(
                                                        <Menu.Item key={menus.menu_uuid} onClick={getBreadcrumbsParam}>{menus.menu_name}</Menu.Item>
                                                    )
                                                }
                                            )
                                        }
                                    </SubMenu>
                                )
                            }
                        )
                    }
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} >
                    页面头部
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    {/* 面包屑导航 */}
                    <Breadcrumbs
                        breadcrumbsParam ={breadcrumbsParam}
                    />
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Route path={path} exact component={HomePage}/>
                        {/* <Route path='/index/AddArticle' exact component={AddArticle}/> */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>bokeyuan.com ©2018 Created by zhangyu</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default AdminIndex
