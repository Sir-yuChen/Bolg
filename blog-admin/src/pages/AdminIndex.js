import React,{useState,useEffect,Suspense, lazy } from 'react'
import '../style/adminIndex.css'
import Breadcrumbs from '../components/navigate/Breadcrumbs'
import {getAdminMenu,getAdminMenuByUrl} from '../service/index'
import actionTypes from '../redux/actions/actionType'
import HeaderComp from '../components/header/HeaderComp'

import {useSelector,useDispatch} from 'react-redux'
import { Layout, Menu ,Spin } from 'antd'
import {PieChartOutlined} from '@ant-design/icons'
import {Route,Link,useHistory} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const AdminIndex = () => {

    const comp_Path = useSelector(state => state.comp_Path);
    const dispatch = useDispatch();

    const [collapsed,setCollapsed] = useState(false)
    const [menuList,setMenuList] =  useState([])
    const [openKeys, setOpenKeys] = useState([])
    const [rootSubmenuKeys, setRootSubmenuKeys] = useState([])
    let [menuList_child, setMenuList_child] = useState([])
    let [breadcrumbsParam, setBreadcrumbsParam] = useState([])

    const HomePage = lazy(() =>
        import(/* webpackChunkName: "home" */ '../components'+comp_Path)
    )
    let history = useHistory();//编程式路由
    
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
        // console.log(`打印key`,key.key )
        let temp_path =key.key
        menuList.map(
            menu =>{
                if (menu.menu_uuid === key.key) {
                    dispatch({
                        type:actionTypes.BREADCRUMBSPARAM,
                        breadcrumbsParam :{name:menu.menu_name,url:menu.menu_url,level:menu.level}
                    })
                    temp_path = menu.menu_url
                } 
            })
        menuList_child.map(
            child =>{
                if (child.menu_uuid === key.key) {
                    dispatch({
                        type:actionTypes.BREADCRUMBSPARAM,
                        breadcrumbsParam:{name:child.menu_name,url:child.menu_url,level:child.level}
                    })
                    temp_path = child.menu_url
                }
            }
        )
        //TODO 单独添加面包屑
        if (temp_path == key.key ) {
            getAdminMenuByUrl(key.key).then(
                res =>{
                    let menuInfo =res.data.data
                    console.log(`菜单信息`, menuInfo)
                    dispatch({
                        type:actionTypes.BREADCRUMBSPARAM,
                        breadcrumbsParam :{name:menuInfo.menu_name,url:menuInfo.menu_url,level:menuInfo.level}
                    })
                }
            )
         }
         
        dispatch({
            type:actionTypes.UPDATE_COMP_PATH,
            comp_Path:temp_path//路由以及组件
        })
        history.push(temp_path) //编程式跳转
    }

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
                                                        <Menu.Item key={menus.menu_uuid} onClick={getBreadcrumbsParam}>
                                                            <Link to={menus.menu_url}>
                                                                {menus.menu_name}
                                                            </Link>
                                                        </Menu.Item>
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
                   <HeaderComp
                    getBreadcrumbsParam = {getBreadcrumbsParam}
                   />
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    {/* 面包屑导航 */}
                    <Breadcrumbs
                        breadcrumbsParam ={breadcrumbsParam}
                    />
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Suspense fallback={
                            <div className='spin'>
                                <Spin  delay={500} />
                            </div>
                        }>
                            <Route path={comp_Path} exact component={HomePage}/>
                        </Suspense>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>bokeyuan.com ©2018 Created by zhangyu</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default AdminIndex
