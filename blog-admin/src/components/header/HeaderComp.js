import React ,{useState,useEffect}from 'react'
import '../../style/header.css'
import {ICON_URL} from '../../config/IconUrl'
import actionTypes from '../../redux/actions/actionType'
import {getNoticeInfoByUUid,getNoticeNum,updateNoticeNum} from '../../service/index'


import {Avatar, Image,Menu, Dropdown,notification, Row, Col,Badge} from 'antd'
import { UserOutlined,DownOutlined,createFromIconfontCN  } from '@ant-design/icons'
import {useDispatch} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'


const HeaderComp = (props) => {
    const dispatch = useDispatch();
    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL,
      });
      const [iconList,setIconList] = useState({})
      const [noticeNum,setNoticeNum] = useState(0)
      
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
    let user_uuid = '56sd54e56s254ds52'

    useEffect(() => {
        getNoticeNum(user_uuid).then(
            res =>{
                setNoticeNum(res.data.data[0].countNum)
            }
        )
    }, [])

    const NoticeInfo = () =>{
        getNoticeInfoByUUid(user_uuid).then(
            res =>{
                console.log(`获取通知数据`,res.data.data )
                let noticelist = res.data.data
                noticelist.map(
                    item =>{
                        notification[item.notice_type]({
                            message: item.notice_title,
                            duration: item.duration,
                            description:item.notice_content,
                            onClose:updateNoticeNum(item.user_uuid),
                          });
                    }
                )
                if (noticeNum == 0 ) {
                    notification['info']({
                        message: '通知',
                        duration: 2,
                        description:'无最新通知',
                      });
                }
                setNoticeNum(0)
            }
        )
    }

    return (
        <div className='header_div'>
            <Row type="flex">
                <Col  xs={24} sm={12} md={12} lg={16} xl={18} >
                    <span onClick={handleClick}>
                        <span className='systemTitleFont'>
                            Blog 后台管理系统
                        </span>
                        <span className='refresh'>
                            <IconFont type ='icon-39' />
                        </span>
                    </span>
                </Col>
                <Col xs={0} sm={12} md={12} lg={8} xl={6}>
                    <span className='avatar_span'>
                        <span className='soundOutlined' onClick={NoticeInfo}>
                            <Badge count={noticeNum}  size="small">
                                <span className='soundOutlined_icon'>
                                    <IconFont type ='icon-notice'    />
                                </span>
                            </Badge>
                        </span>
                        <span className='avatar' >
                            <Avatar
                                className='avatar_span_img'
                                size={45}
                                alt='登录头像获取失败'
                                src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                icon={<UserOutlined />} 
                                />
                            <Dropdown overlay={menu} className='hreader_dropdown'>
                                <span className="dropdown_a">
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        超级管理员 <DownOutlined />
                                    </a>
                                </span>
                            </Dropdown>
                        </span>
                    </span>
                </Col>
            </Row>
        </div>
    )
}

export default HeaderComp
