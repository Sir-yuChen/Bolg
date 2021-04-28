import React,{useEffect,useState} from 'react'
import AuthorCss from '../styles/components/author.module.css'
import  servicePath  from '../config/apiUrl'

import {Avatar,Divider,Tag } from 'antd'
import {ICON_URL_JS} from  '../config/iconUrl'
import {createFromIconfontCN ,AntDesignOutlined} from '@ant-design/icons';
import axios from 'axios'


function Author() {

    const [authorInfo ,setAuthorInfo] = useState({})
    const [iconList ,setIconList] = useState({})
    const [tagList ,setTagList] = useState([{}])

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL_JS,
      });

    useEffect(
        async ()=>{
            axios(servicePath.getBlogInfo ).then(
                (res) => {
                    setAuthorInfo(res.data.data[0])
                }
            )
            axios.get( servicePath.getIconObj,{params:{site:"author"}}).then(
                (res) => {
                    setIconList(JSON.parse( res.data.data[0].iconKV))
                    // console.log("--data->",res.data.data[0].iconKV)
                }
            )  
            axios.get( servicePath.getTagList,{params:{site:"author"}}).then(
                (res) => {
                    setTagList(res.data.data)
                    // console.log(`查标签集合：`,res.data.data )
                }
            )  
        }
    ,[])

    return (
        <div  className={`${AuthorCss.author_div}`} >
            <div >
                <div  className={`${AuthorCss.author_avatar}`} >
                    <Avatar
                        size={120}
                        icon={<AntDesignOutlined />}
                        src={authorInfo.user_photo}
                        // src="https://img1.baidu.com/it/u=2491306664,177039371&fm=26&fmt=auto&gp=0.jpg"
                        alt="头像加载失败"
                    />
                </div>
                <div className={`${AuthorCss.author_name}`}>
                    <span >{authorInfo.user_name}</span>
                </div>
            </div>
            <div className={`${AuthorCss.author_introduce}`}>
                <span>
                    {authorInfo.motto}
                </span>
                <div >
                    {
                        tagList.map(
                            item =>{
                                return(
                                    <span key={item.tag_uuid+"tag"}>
                                        <Tag  className={`${AuthorCss.author_tag}`}  visible={item.tag_visible == 1 ? true:false} color={item.tag_color}>{item.tag_content}</Tag> 
                                    </span>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <Divider>社交账号</Divider>
            <div className={`${AuthorCss.author_communicate_div}`}>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={ <IconFont type={iconList.githubOutlined}/>}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={ <IconFont type={iconList.wechatOutlined}/>}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<IconFont type={iconList.qqOutlined}/>}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<IconFont type={iconList.dingdingOutlined}/>}/>
                </span>
            </div>
        </div>
    )
}

export default Author
