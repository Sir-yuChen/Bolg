import React,{useEffect,useState} from 'react'
import AuthorCss from '../styles/components/author.module.css'
import {MYSQL_URL} from '../components/StaticConst'


import {Avatar,Divider} from 'antd'
import { AntDesignOutlined,GithubOutlined,WechatOutlined,QqOutlined,DingdingOutlined } from '@ant-design/icons';
import axios from 'axios'


function Author() {

    const [authorInfo ,setAuthorInfo] = useState({})

    useEffect(
        async ()=>{
            axios(MYSQL_URL+'/default/getBlogInfo').then(
                (res) => {
                    console.log(res.data.data[0])
                    setAuthorInfo(res.data.data[0])
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
            </div>
            <Divider>社交账号</Divider>
            <div className={`${AuthorCss.author_communicate_div}`}>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<GithubOutlined />}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<WechatOutlined />}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<QqOutlined />}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<DingdingOutlined />}/>
                </span>
            </div>
        </div>
    )
}

export default Author
