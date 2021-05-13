import React ,{useState,useEffect}from 'react'
import '../../style/header.css'
import {ICON_URL} from '../../config/IconUrl'
import actionTypes from '../../redux/actions/actionType'
import {getNoticeInfoByUUid} from '../../service/index'


import {Avatar, Image,Menu, Dropdown,notification} from 'antd'
import { UserOutlined,DownOutlined,createFromIconfontCN  } from '@ant-design/icons'
import {useDispatch} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'


const HeaderComp = (props) => {
    const dispatch = useDispatch();
    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL,
      });
      const [iconList,setIconList] = useState({})
      
      let history = useHistory();//编程式路由
      function handleClick() {
        history.push("/")
        dispatch({
            type:actionTypes.BREADCRUMBSPARAM,
            breadcrumbsParam :{name:'',url:'',level:''}
        })
      }

    const menu = (
        <Menu onClick={props.getBreadcrumbsParam}>
            <Menu.Item key="/basicInfo/Index">
               <Link to='/basicInfo/Index'>
                    个人主页
               </Link>
            </Menu.Item>
            <Menu.Item key="/index/AddArticle">
                <Link to='/index/AddArticle'>
                    修改密码
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="/index/AddArticle" >
                <span >
                    退出登录
                </span>
            </Menu.Item>
        </Menu>
    )
    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'Notification Title',
          duration: 4,
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      };

    const NoticeInfo = () =>{
        let user_uuid = '56sd54e56s254ds52'
        getNoticeInfoByUUid(user_uuid).then(
            res =>{
                console.log(`获取通知数据`,res.data.data )
            }
        )
    }

    return (
        <div className='header_div'>
            <span onClick={handleClick}>
                <span className='systemTitleFont'>
                    Blog 后台管理系统
                </span>
                <span className='refresh'>
                    <IconFont type ='icon-39' />
                </span>
            </span>
           <span className='soundOutlined' onClick={NoticeInfo}>
                <IconFont type ='icon-notice' />
           </span>
           <span className='avatar_span'>
                <Avatar
                    className='avatar_span_img'
                    size={45}
                    alt='登录头像获取失败'
                    src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    icon={<UserOutlined />} 
                    />
                    <Dropdown overlay={menu} className='hreader_dropdown'>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            超级管理员 <DownOutlined />
                        </a>
                    </Dropdown>
           </span>
        </div>
    )
}

export default HeaderComp
